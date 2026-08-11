import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import { ExternalLinkIcon } from './Icons'
import './Awards.css'

export function Awards() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Certifications & Awards">
      <ul className="awards-list">
        {portfolio.achievements.map((item) => (
          <li key={item.title} className="award-item">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer" className="award-link">
                {item.title}
                <ExternalLinkIcon />
              </a>
            ) : (
              <span>{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
