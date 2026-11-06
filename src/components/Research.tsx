import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Research.css'

export function Research() {
  return (
    <Section id="research" index="03" title="Research">
      {portfolio.research.map((item) => (
        <article key={item.title} className="research-item">
          <div>
            <h3 className="research-title">{item.title}</h3>
            <p className="research-meta">
              {item.organization} · {item.period}
            </p>
          </div>
          <div>
            <p className="research-description">{item.description}</p>
            <ul className="tag-list research-focus" aria-label="Research focus areas">
              {item.focus.map((focus) => (
                <li key={focus} className="tag">
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Section>
  )
}
