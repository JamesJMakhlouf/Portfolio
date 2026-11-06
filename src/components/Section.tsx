import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-header">
          <span className="section-index" aria-hidden="true">
            {index}
          </span>
          <h2 className="section-title" id={`${id}-title`}>
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  )
}
