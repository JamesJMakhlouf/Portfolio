import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="experience-list">
        {portfolio.experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="experience-item">
            <div className="experience-meta">
              <p className="experience-period">
                {item.start} – {item.end}
              </p>
              <p>{item.location}</p>
            </div>
            <div>
              <h3 className="experience-role">
                {item.role}
                <span className="experience-company">{item.company}</span>
              </h3>
              <ul className="experience-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
