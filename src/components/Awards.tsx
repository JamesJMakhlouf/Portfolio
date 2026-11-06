import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import { ExternalLinkIcon } from './Icons'
import './Awards.css'

export function Awards() {
  return (
    <Section id="awards" index="06" title="Awards & Activities">
      <div className="awards-grid">
        <div>
          <h3 className="awards-heading">Certifications & Awards</h3>
          <ul className="awards-list">
            {portfolio.achievements.map((item) => (
              <li key={item.title}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="award-link">
                    {item.title}
                    <ExternalLinkIcon />
                  </a>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="awards-heading">Volunteering</h3>
          <ul className="awards-list">
            {portfolio.volunteering.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span className="award-description">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="awards-heading">Languages</h3>
          <ul className="awards-list">
            {portfolio.languages.map((language) => (
              <li key={language.name} className="language-row">
                <span>{language.name}</span>
                <span className="language-level">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
