import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Education.css'

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <ol className="education-list">
        {portfolio.education.map((item) => (
          <li key={item.school} className="education-item">
            <div className="education-row">
              <h3 className="education-school">{item.school}</h3>
              <span className="education-period">{item.period}</span>
            </div>
            <p className="education-degree">
              {item.degree} · {item.location}
            </p>
            <ul className="education-details">
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
