import { portfolio, type ProjectMedia } from '../data/portfolio'
import { AwardIcon, ExternalLinkIcon } from './Icons'
import './ProjectDetail.css'

function MediaItem({ media }: { media: ProjectMedia }) {
  switch (media.type) {
    case 'image':
      return (
        <figure className="media-item">
          <img className="media-image" src={media.src} alt={media.alt} loading="lazy" />
          {media.caption ? <figcaption className="media-caption">{media.caption}</figcaption> : null}
        </figure>
      )
    case 'video':
      return (
        <figure className="media-item">
          <video className="media-video" controls preload="none" poster={media.poster} muted={media.muted} aria-label={media.alt}>
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {media.caption ? <figcaption className="media-caption">{media.caption}</figcaption> : null}
        </figure>
      )
    case 'videoLink':
      return (
        <figure className="media-item">
          <div className="media-embed">
            <a className="media-embed-link" href={media.url} target="_blank" rel="noreferrer">
              {media.label ?? 'Watch demo'}
              <ExternalLinkIcon />
            </a>
          </div>
          {media.caption ? <figcaption className="media-caption">{media.caption}</figcaption> : null}
        </figure>
      )
  }
}

export function ProjectDetail({ slug, onBack }: { slug: string; onBack: () => void }) {
  const project = portfolio.projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container project-detail">
        <p className="project-not-found">Project not found.</p>
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          ← Back to projects
        </button>
      </div>
    )
  }

  const titleId = `project-${project.slug}-title`

  return (
    <article className="project-detail" aria-labelledby={titleId}>
      <div className="container">
        <button type="button" className="back-link" onClick={onBack}>
          ← All projects
        </button>

        <header className="detail-hero">
          <div className="detail-heading">
            <h1 id={titleId} className="detail-title">
              {project.title}
            </h1>
            {project.award ? (
              <span className="detail-award">
                <AwardIcon />
                {project.award}
              </span>
            ) : null}
          </div>
          <p className="detail-summary">{project.summary}</p>

          <div className="detail-meta">
            <ul className="detail-tags" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className="detail-tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.links && project.links.length > 0 ? (
              <ul className="detail-links">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noreferrer" className="detail-link">
                      {link.label}
                      <ExternalLinkIcon />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </header>

        {project.media && project.media.length > 0 ? (
          <section className="detail-media" aria-label="Media">
            {project.media.map((media, index) => (
              <MediaItem key={index} media={media} />
            ))}
          </section>
        ) : (
          <div className="detail-media-placeholder" role="img" aria-label="Project media placeholder">
            <span className="detail-media-placeholder-text">media coming soon</span>
          </div>
        )}

        {project.longDescription ? (
          <section className="detail-section" aria-label="Overview">
            <h2 className="detail-section-title">Overview</h2>
            <p className="detail-overview">{project.longDescription}</p>
          </section>
        ) : null}

        {project.highlights && project.highlights.length > 0 ? (
          <section className="detail-section" aria-label="Highlights">
            <h2 className="detail-section-title">Highlights</h2>
            <ul className="detail-highlights">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  )
}
