import { portfolio } from '../data/portfolio'
import {
  DownloadIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from './Icons'
import './Hero.css'

const contactLinks = [
  { label: 'LinkedIn', href: portfolio.contact.linkedin, icon: <LinkedInIcon /> },
  { label: 'GitHub', href: portfolio.contact.github, icon: <GitHubIcon /> },
  { label: 'Email', href: `mailto:${portfolio.contact.email}`, icon: <MailIcon /> },
  { label: 'Phone', href: `tel:${portfolio.contact.phone.replace(/\s/g, '')}`, icon: <PhoneIcon /> },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="hero-kicker">Hi, my name is</p>
        <h1 className="hero-name">{portfolio.contact.name}</h1>
        <p className="hero-role">{portfolio.contact.title}</p>
        <p className="hero-summary">{portfolio.contact.summary}</p>

        <div className="hero-actions">
          <a href={portfolio.contact.cvUrl} className="btn btn-primary" download>
            <DownloadIcon />
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>

        <ul className="hero-contact" aria-label="Contact details">
          <li className="hero-contact-item">
            <LocationIcon />
            <span>{portfolio.contact.location}</span>
          </li>
          {contactLinks.map((link) => (
            <li key={link.label} className="hero-contact-item">
              {link.icon}
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
              {link.href.startsWith('http') ? <ExternalLinkIcon className="hero-external" /> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
