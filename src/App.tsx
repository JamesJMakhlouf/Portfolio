import type { MouseEvent } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Awards } from './components/Awards'
import { Research } from './components/Research'
import { Footer } from './components/Footer'
import { ProjectDetail } from './components/ProjectDetail'
import { useHashRouter } from './hooks/useHashRouter'
import { portfolio } from './data/portfolio'
import './App.css'

function skipToContent(event: MouseEvent<HTMLAnchorElement>) {
  // The hash is reserved for routing, so move focus without changing it.
  event.preventDefault()
  const main = document.getElementById('main')
  main?.focus()
  main?.scrollIntoView()
}

function App() {
  const { projectSlug } = useHashRouter()

  return (
    <>
      <a href="#main" className="skip-link" onClick={skipToContent}>
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {projectSlug ? (
          <ProjectDetail key={projectSlug} slug={projectSlug} />
        ) : (
          <>
            <Hero />
            <Experience />
            <Projects />
            <Research />
            <Skills />
            <Education />
            <Awards />
            <Footer />
          </>
        )}
      </main>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <p>
            © {new Date().getFullYear()} {portfolio.contact.name}
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
