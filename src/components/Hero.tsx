import { portfolio } from '../data/portfolio'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import './Hero.css'

const { contact } = portfolio

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="container hero-inner">
        <div>
          <p className="hero-role">{contact.title}</p>
          <h1 className="hero-name" id="hero-name">
            {contact.name}
          </h1>
          <p className="hero-tagline">{contact.tagline}</p>
          <p className="hero-summary">{contact.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={contact.cvUrl} className="btn btn-secondary" download>
              <DownloadIcon />
              Download CV
            </a>
          </div>

          <ul className="hero-links" aria-label="Contact links">
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>
                <MailIcon />
                Email
              </a>
            </li>
          </ul>
        </div>

        <dl className="title-block">
          {contact.facts.map((fact) => (
            <div key={fact.label} className="title-block-row">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
