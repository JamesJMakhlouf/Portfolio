import { useCallback, useEffect, useState } from 'react'

export interface Route {
  path: string
}

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash === '' || hash === '/') return { path: '/' }
  return { path: hash.startsWith('/') ? hash : `/${hash}` }
}

export function useHashRouter() {
  const [route, setRoute] = useState<Route>(parseHash)

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((path: string) => {
    if (parseHash().path === path) return
    window.location.hash = path
  }, [])

  const navigateHome = useCallback(() => {
    if (parseHash().path === '/') return
    window.location.hash = '/'
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route.path])

  return { route, navigate, navigateHome }
}
