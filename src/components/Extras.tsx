import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Extras.css'

export function Extras() {
  const hasVolunteering = portfolio.volunteering.length > 0
  const hasLanguages = portfolio.languages.length > 0
  const hasInterests = portfolio.interests.length > 0

  return (
    <Section id="extras" eyebrow="More" title="Volunteering, Languages & Interests">
      <div className="extras-grid">
        {hasVolunteering ? (
          <div className="extras-block">
            <h3 className="extras-title">Volunteering</h3>
            <ul className="extras-list">
              {portfolio.volunteering.map((item) => (
                <li key={item.title} className="extras-volunteer">
                  <span className="extras-volunteer-title">{item.title}</span>
                  <span className="extras-volunteer-desc">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasLanguages ? (
          <div className="extras-block">
            <h3 className="extras-title">Languages</h3>
            <ul className="extras-list">
              {portfolio.languages.map((lang) => (
                <li key={lang.name} className="extras-lang">
                  <span className="extras-lang-name">{lang.name}</span>
                  <span className="extras-lang-level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasInterests ? (
          <div className="extras-block">
            <h3 className="extras-title">Interests</h3>
            <ul className="extras-list extras-chips">
              {portfolio.interests.map((interest) => (
                <li key={interest} className="extras-chip">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
