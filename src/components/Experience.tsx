import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="timeline">
        {portfolio.experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="timeline-item">
            <div className="timeline-period" aria-label={`${item.start} to ${item.end}`}>
              {item.start} — {item.end}
            </div>
            <h3 className="timeline-role">
              {item.role} · <span className="timeline-company">{item.company}</span>
            </h3>
            <p className="timeline-location">{item.location}</p>
            <ul className="timeline-highlights">
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
