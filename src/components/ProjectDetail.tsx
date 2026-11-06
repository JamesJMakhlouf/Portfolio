import { useEffect, useRef, useState } from 'react'
import { portfolio, type ProjectMedia } from '../data/portfolio'
import { thumbnailUrl } from '../utils/media'
import { AwardIcon, ExternalLinkIcon } from './Icons'
import './ProjectDetail.css'

type ImageMedia = Extract<ProjectMedia, { type: 'image' }>
type VideoMedia = Extract<ProjectMedia, { type: 'video' }>

const INITIAL_GALLERY_SIZE = 9
const COLLAPSE_GALLERY_ABOVE = 12

function VideoFigure({ media }: { media: VideoMedia }) {
  return (
    <figure className="media-figure">
      <video
        className="media-video"
        controls
        playsInline
        preload="none"
        poster={media.poster ?? thumbnailUrl(media.src)}
        muted={media.muted}
        aria-label={media.alt}
      >
        <source src={media.src} type="video/mp4" />
      </video>
      {media.caption ? <figcaption className="media-caption">{media.caption}</figcaption> : null}
    </figure>
  )
}

function ImageGallery({ images }: { images: ImageMedia[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const visible = expanded || images.length <= COLLAPSE_GALLERY_ABOVE ? images : images.slice(0, INITIAL_GALLERY_SIZE)
  const active = activeIndex === null ? null : images[activeIndex]

  const open = (index: number) => {
    setActiveIndex(index)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = (delta: number) => {
    setActiveIndex((index) => (index === null ? null : (index + delta + images.length) % images.length))
  }

  return (
    <>
      <ul className="gallery-grid">
        {visible.map((image, index) => (
          <li key={image.src}>
            <figure className="gallery-item">
              <button
                type="button"
                className="gallery-button"
                aria-label={`Enlarge image: ${image.alt}`}
                onClick={() => open(index)}
              >
                <img src={thumbnailUrl(image.src)} alt="" loading="lazy" decoding="async" />
              </button>
              {image.caption ? <figcaption className="media-caption">{image.caption}</figcaption> : null}
            </figure>
          </li>
        ))}
      </ul>

      {images.length > visible.length ? (
        <button type="button" className="btn btn-secondary gallery-more" onClick={() => setExpanded(true)}>
          Show all {images.length} images
        </button>
      ) : null}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image viewer"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') step(1)
          if (event.key === 'ArrowLeft') step(-1)
        }}
      >
        {active ? (
          <>
            <div className="lightbox-bar">
              <span className="lightbox-count">
                {(activeIndex ?? 0) + 1} / {images.length}
              </span>
              <button type="button" className="lightbox-control" onClick={close}>
                Close
              </button>
            </div>
            <img className="lightbox-image" src={active.src} alt={active.alt} />
            {active.caption ? <p className="lightbox-caption">{active.caption}</p> : null}
            {images.length > 1 ? (
              <div className="lightbox-nav">
                <button type="button" className="lightbox-control" onClick={() => step(-1)}>
                  ← Previous
                </button>
                <button type="button" className="lightbox-control" onClick={() => step(1)}>
                  Next →
                </button>
              </div>
            ) : null}
          </>
        ) : null}
      </dialog>
    </>
  )
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = portfolio.projects.find((candidate) => candidate.slug === slug)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!project) return
    const previousTitle = document.title
    document.title = `${project.title} | ${portfolio.contact.name}`
    headingRef.current?.focus({ preventScroll: true })
    return () => {
      document.title = previousTitle
    }
  }, [project])

  if (!project) {
    return (
      <div className="container project-detail">
        <h1 className="detail-title">Project not found</h1>
        <a href="#/" className="btn btn-secondary detail-missing-link">
          ← All projects
        </a>
      </div>
    )
  }

  const media = project.media ?? []
  const videos = media.filter((item): item is VideoMedia => item.type === 'video')
  const images = media.filter((item): item is ImageMedia => item.type === 'image')
  const [leadVideo, ...otherVideos] = videos

  return (
    <article className="project-detail">
      <div className="container">
        <a href="#/" className="back-link">
          ← All projects
        </a>

        <header className="detail-hero">
          <h1 ref={headingRef} className="detail-title" tabIndex={-1}>
            {project.title}
          </h1>
          {project.award ? (
            <p className="award-badge detail-award">
              <AwardIcon />
              {project.award}
            </p>
          ) : null}
          <p className="detail-summary">{project.summary}</p>
          <ul className="tag-list detail-tags" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          {project.links?.length ? (
            <ul className="detail-links">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        {leadVideo ? (
          <div className="detail-lead">
            <VideoFigure media={leadVideo} />
          </div>
        ) : null}

        <div className="detail-columns">
          {project.longDescription ? (
            <section aria-labelledby="overview-title">
              <h2 id="overview-title" className="detail-section-title">
                Overview
              </h2>
              <p className="detail-overview">{project.longDescription}</p>
            </section>
          ) : null}
          {project.highlights?.length ? (
            <section aria-labelledby="highlights-title">
              <h2 id="highlights-title" className="detail-section-title">
                Highlights
              </h2>
              <ul className="detail-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        {otherVideos.length > 0 ? (
          <section className="detail-section" aria-labelledby="videos-title">
            <h2 id="videos-title" className="detail-section-title">
              Demos
            </h2>
            <div className="video-grid">
              {otherVideos.map((video) => (
                <VideoFigure key={video.src} media={video} />
              ))}
            </div>
          </section>
        ) : null}

        {images.length > 0 ? (
          <section className="detail-section" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="detail-section-title">
              Gallery
            </h2>
            <ImageGallery images={images} />
          </section>
        ) : null}
      </div>
    </article>
  )
}
