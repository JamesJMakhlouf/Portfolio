import { portfolio } from '../data/portfolio'
import { Section } from './Section'
import './Skills.css'

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <dl>
        {portfolio.skills.map((group) => (
          <div key={group.title} className="skills-row">
            <dt>{group.title}</dt>
            <dd>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
