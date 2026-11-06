import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Education.css'

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <ol className="education-list">
        {portfolio.education.map((item) => (
          <li key={item.school} className="education-item">
            <h3 className="education-school">{item.school}</h3>
            <p className="education-degree">{item.degree}</p>
            <p className="education-meta">
              {item.period} · {item.location}
            </p>
            <ul className="education-details">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
