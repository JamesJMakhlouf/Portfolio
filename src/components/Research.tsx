import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Research.css'

export function Research() {
  return (
    <Section id="research" eyebrow="Focus" title="Research">
      <div className="research-card">
        {portfolio.research.map((item) => (
          <article key={item.title} className="research-item">
            <h3 className="research-title">{item.title}</h3>
            <p className="research-meta">
              <span>{item.organization}</span>
              <span className="research-period">{item.period}</span>
            </p>
            <p className="research-description">{item.description}</p>
            <ul className="research-focus" aria-label="Research focus areas">
              {item.focus.map((focus) => (
                <li key={focus} className="research-focus-chip">
                  {focus}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
