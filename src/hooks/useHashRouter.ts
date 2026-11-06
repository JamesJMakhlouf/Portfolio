import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export interface Route {
  projectSlug: string | null
  anchor: string | null
}

const PROJECT_PREFIX = '/projects/'

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith(PROJECT_PREFIX)) {
    return { projectSlug: decodeURIComponent(hash.slice(PROJECT_PREFIX.length)), anchor: null }
  }
  return { projectSlug: null, anchor: hash.replace(/^\//, '') || null }
}

function jumpTo(top: number) {
  window.scrollTo({ top, behavior: 'instant' })
}

function jumpToElement(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
}

/** Project pages live at #/projects/<slug>; any other hash is a section on the home page. */
export function useHashRouter(): Route {
  const [route, setRoute] = useState<Route>(parseHash)
  const homeScrollY = useRef<number | null>(null)
  const previousRoute = useRef<Route | null>(null)

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash()
      if (next.projectSlug && !previousRoute.current?.projectSlug) {
        homeScrollY.current = window.scrollY
      }
      setRoute(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useLayoutEffect(() => {
    const previous = previousRoute.current
    previousRoute.current = route
    const isFirstRender = previous === null
    const leftProject = Boolean(previous?.projectSlug) && !route.projectSlug

    if (route.projectSlug) {
      jumpTo(0)
    } else if (route.anchor) {
      // The browser handles in-page anchors itself, except when the target has just rendered.
      if (isFirstRender || leftProject) jumpToElement(route.anchor)
    } else if (leftProject) {
      if (homeScrollY.current === null) jumpToElement('projects')
      else jumpTo(homeScrollY.current)
    }
  }, [route])

  return route
}
