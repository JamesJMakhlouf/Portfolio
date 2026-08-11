import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
