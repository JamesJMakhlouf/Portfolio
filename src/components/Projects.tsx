import { useState } from 'react'
import { portfolio, projectCategoryLabels, type Project, type ProjectCategory } from '../data/portfolio'
import { thumbnailUrl } from '../utils/media'
import { Section } from './Section'
import { AwardIcon, ExternalLinkIcon } from './Icons'
import './Projects.css'

type Filter = ProjectCategory | 'all'

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(Object.entries(projectCategoryLabels) as [ProjectCategory, string][]).map(([value, label]) => ({
    value,
    label,
  })),
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-media">
        <img src={thumbnailUrl(project.cover)} alt={project.coverAlt} loading="lazy" decoding="async" />
      </div>
      <div className="project-body">
        <p className="project-category">{projectCategoryLabels[project.category]}</p>
        <h3 className="project-title">
          <a href={`#/projects/${project.slug}`} className="project-card-link">
            {project.title}
          </a>
        </h3>
        {project.award ? (
          <p className="award-badge">
            <AwardIcon />
            {project.award}
          </p>
        ) : null}
        <p className="project-summary">{project.summary}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        {project.links?.length ? (
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
  const [filter, setFilter] = useState<Filter>('all')
  const projects = portfolio.projects.filter((project) => filter === 'all' || project.category === filter)

  return (
    <Section id="projects" index="02" title="Projects">
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className="project-filter"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
