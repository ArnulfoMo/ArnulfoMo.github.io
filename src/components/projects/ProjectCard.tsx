import type { Project, ProjectLink } from '../../types/portfolio'
import { Arrow } from '../ui/Arrow'

function getProjectArchitectureLabel(category: string) {
  if (category === 'API REST') return '{ API }'
  if (category === 'Backend') return 'SERVICIO'

  return 'WEB'
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-media">
        <img className="project-image" src={project.image.src} alt={project.image.alt} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-media project-visual visual-${project.id}`}>
      <div className="visual-caption">
        <span className="tiny-dot" />
        {project.category}
        <span>ESQUEMA ILUSTRATIVO</span>
      </div>
      <div className="architecture">
        <span>CLIENTE</span><i>→</i><strong>{getProjectArchitectureLabel(project.category)}</strong><i>→</i><span>DATOS</span>
      </div>
      <div className="visual-bottom">
        <span>request</span><span className="connection-line" /><span>response</span>
      </div>
      <div className="image-slot" aria-label="Espacio para imagen del proyecto">
        <span>＋</span>
        <small>AGREGAR IMAGEN</small>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  expanded?: boolean
}

export function ProjectCard({ project, index, expanded = false }: ProjectCardProps) {
  const projectLinks: ProjectLink[] = [
    { url: project.repository, label: 'Código' },
    { url: project.demo, label: 'Demo' },
    { url: project.documentation, label: 'Documentación' },
  ].filter((link): link is ProjectLink & { url: string } => Boolean(link.url))

  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, '0')} / {project.category}</span>
          {project.placeholder && <span>Contenido de ejemplo</span>}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Tecnologías">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {expanded && (
          <ul className="feature-list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        <div className="project-links">
          {projectLinks.length ? projectLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
              <Arrow diagonal />
            </a>
          )) : <span className="muted text-sm">[Agregar enlaces al proyecto]</span>}
        </div>
      </div>
    </article>
  )
}
