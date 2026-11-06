import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'
import './Footer.css'

const { contact } = portfolio

const CONTACT_LINKS = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: <MailIcon /> },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[\s-]/g, '')}`, icon: <PhoneIcon /> },
  { label: 'LinkedIn', value: contact.linkedinHandle, href: contact.linkedin, icon: <LinkedInIcon /> },
  { label: 'GitHub', value: contact.githubHandle, href: contact.github, icon: <GitHubIcon /> },
]

export function Footer() {
  return (
    <div className="contact-section">
      <Section id="contact" index="07" title="Get in Touch">
        <p className="contact-intro">{contact.contactIntro}</p>
        <ul className="contact-links">
          {CONTACT_LINKS.map((link) => {
            const isExternal = link.href.startsWith('http')
            return (
              <li key={link.label}>
                <a
                  className="contact-card"
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  {link.icon}
                  <span className="contact-card-text">
                    <span className="contact-card-label">{link.label}</span>
                    <span className="contact-card-value">{link.value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </Section>
    </div>
  )
}
