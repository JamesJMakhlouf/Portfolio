import { useCallback } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Awards } from './components/Awards'
import { Research } from './components/Research'
import { Extras } from './components/Extras'
import { Footer } from './components/Footer'
import { ProjectDetail } from './components/ProjectDetail'
import { useHashRouter } from './hooks/useHashRouter'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()
  const { route, navigate, navigateHome } = useHashRouter()

  const projectSlug = route.path.startsWith('/projects/') ? route.path.slice('/projects/'.length) : null
  const openProject = (slug: string) => navigate(`/projects/${slug}`)

  const scrollToSection = useCallback(
    (id: string) => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      if (projectSlug) {
        navigateHome()
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          })
        })
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    [projectSlug, navigateHome],
  )

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header onSectionNav={scrollToSection} />
      {projectSlug ? (
        <main id="main">
          <ProjectDetail slug={projectSlug} onBack={navigateHome} />
        </main>
      ) : (
        <>
          <main id="main">
            <Hero />
            <Experience />
            <Projects onOpenProject={openProject} />
            <Research />
            <Skills />
            <Education />
            <Awards />
            <Extras />
            <Footer />
          </main>
          <footer className="site-footer">
            <div className="container site-footer-inner">
              <p>© {currentYear} James Makhlouf. Built with React & TypeScript.</p>
              <button type="button" className="back-to-top" onClick={() => scrollToSection('top')}>
                Back to top ↑
              </button>
            </div>
          </footer>
        </>
      )}
    </>
  )
}

export default App
