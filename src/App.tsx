import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Awards } from './components/Awards'
import { Extras } from './components/Extras'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Extras />
        <Footer />
      </main>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <p>© {currentYear} James Makhlouf. Built with React & TypeScript.</p>
          <a href="#top" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
