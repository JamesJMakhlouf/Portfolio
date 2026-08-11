import { portfolio, type Project } from '../data/portfolio'
import { Section } from './Section'
import { AwardIcon, ExternalLinkIcon } from './Icons'
import './Projects.css'

function ProjectMedia({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <img className="project-media" src={project.cover} alt={project.coverAlt ?? project.title} loading="lazy" />
    )
  }
  return (
    <div className="project-placeholder" role="img" aria-label="Project media placeholder">
      <span className="project-placeholder-text">media coming soon</span>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="project-card">
      <button type="button" className="project-card-link" onClick={() => onOpen(project.slug)}>
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
                  <a href={link.url} target="_blank" rel="noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </button>
    </article>
  )
}

interface ProjectsProps {
  onOpenProject: (slug: string) => void
}

export function Projects({ onOpenProject }: ProjectsProps) {
  return (
    <Section id="projects" eyebrow="Builds" title="Projects">
      <div className="projects-grid">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </Section>
  )
}
