import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Skills">
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group-title">{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
