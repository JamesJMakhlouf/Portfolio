// Generates web-sized WebP thumbnails for images and poster frames for videos.
// Output mirrors the source path: public/trace/a.png -> public/thumbs/trace/a.png.webp
// Usage: node scripts/optimize-media.mjs   (requires ffmpeg and ffprobe on PATH)
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, statSync } from 'node:fs'
import { dirname, extname, join, relative, sep } from 'node:path'

const PUBLIC_DIR = 'public'
const THUMBS_DIR = join(PUBLIC_DIR, 'thumbs')
const MAX_WIDTH = 960
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg'])
const VIDEO_EXTENSIONS = new Set(['.mp4'])
// Videos whose default poster frame lands on a poor moment, as a fraction of their length.
const POSTER_POSITION_OVERRIDES = { 'explorer-bot/full-demo.mp4': 0.45 }
const DEFAULT_POSTER_POSITION = 0.15

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (path !== THUMBS_DIR) yield* walk(path)
    } else {
      yield path
    }
  }
}

function isFresh(source, output) {
  try {
    return statSync(output).mtimeMs >= statSync(source).mtimeMs
  } catch {
    return false
  }
}

function videoDuration(path) {
  const output = execFileSync('ffprobe', [
    '-v', 'error',
    '-show_entries', 'format=duration',
    '-of', 'csv=p=0',
    path,
  ])
  return Number.parseFloat(output.toString())
}

let generated = 0
for (const source of walk(PUBLIC_DIR)) {
  const extension = extname(source).toLowerCase()
  const isImage = IMAGE_EXTENSIONS.has(extension)
  const isVideo = VIDEO_EXTENSIONS.has(extension)
  if (!isImage && !isVideo) continue

  const relativePath = relative(PUBLIC_DIR, source).split(sep).join('/')
  const output = join(THUMBS_DIR, `${relativePath}.webp`)
  if (isFresh(source, output)) continue
  mkdirSync(dirname(output), { recursive: true })

  // A frame partway into a video skips fade-ins and terminal start-up screens.
  const position = POSTER_POSITION_OVERRIDES[relativePath] ?? DEFAULT_POSTER_POSITION
  const seek = isVideo ? ['-ss', (videoDuration(source) * position).toFixed(2)] : []
  execFileSync('ffmpeg', [
    '-v', 'error', '-y',
    ...seek,
    '-i', source,
    '-frames:v', '1',
    '-vf', `scale='min(${MAX_WIDTH},iw)':-2`,
    '-c:v', 'libwebp',
    '-quality', '74',
    output,
  ])
  generated += 1
}
console.log(`Generated ${generated} thumbnail(s).`)
