import { portfolio, type Project } from '../data/portfolio'
import { Section } from './Section'
import { AwardIcon, ExternalLinkIcon } from './Icons'
import './Projects.css'

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return <img className="project-media" src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" />
  }
  return (
    <div className="project-placeholder" role="img" aria-label="Project media placeholder">
      <span className="project-placeholder-text">media coming soon</span>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectMedia project={project} />
      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-title">{project.title}</h3>
          {project.award ? (
            <span className="project-award">
              <AwardIcon />
              {project.award}
            </span>
          ) : null}
        </div>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="project-tag">
              {tag}
            </li>
          ))}
        </ul>
        {project.links && project.links.length > 0 ? (
          <ul className="project-links">
            {project.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer" className="project-link">
                  {link.label}
                  <ExternalLinkIcon />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Builds" title="Projects">
      <div className="projects-grid">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
