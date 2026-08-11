import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import './Footer.css'

export function Footer() {
  return (
    <Section id="contact" eyebrow="Connect" title="Get in Touch">
      <p className="contact-intro">
        I'm always open to research opportunities, internships, and interesting engineering conversations. Feel free
        to reach out.
      </p>
      <div className="contact-links">
        <a className="contact-card" href={portfolio.contact.cvUrl} download>
          <MailIcon />
          <span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">{portfolio.contact.email}</span>
          </span>
        </a>
        <a className="contact-card" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          <span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">in/jamesmakhlouf</span>
          </span>
        </a>
        <a className="contact-card" href={portfolio.contact.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">JamesJMakhlouf</span>
          </span>
        </a>
      </div>
    </Section>
  )
}
