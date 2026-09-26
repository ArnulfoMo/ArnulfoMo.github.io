import type { CSSProperties } from 'react'
import type { Project } from '../../types/portfolio'
import { GitHubIcon } from '../ui/ActionIcons'

interface ProjectTechnologyVisual {
  color: string
  iconUrl: string
  fallback: string
}

const projectTechnologyVisuals: Record<string, ProjectTechnologyVisual> = {
  Laravel: { color: '#ff2d20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', fallback: 'L' },
  PHP: { color: '#777bb4', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', fallback: 'php' },
  MySQL: { color: '#4479a1', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', fallback: '◫' },
  React: { color: '#61dafb', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', fallback: '⚛' },
  'REST API': { color: '#ff6c37', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', fallback: 'API' },
}

const defaultTechnologyVisual: ProjectTechnologyVisual = {
  color: '#c7ff42',
  iconUrl: '',
  fallback: '•',
}

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
  const repositoryUrl = project.repository ?? 'https://github.com/ArnulfoMo?tab=repositories'

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
          {project.technologies.map((technology) => {
            const visual = projectTechnologyVisuals[technology] ?? defaultTechnologyVisual
            const technologyStyle = { '--technology-color': visual.color } as CSSProperties

            return (
              <li className="project-technology" key={technology} style={technologyStyle}>
                <span className="project-technology-icon" aria-hidden="true">
                  {visual.iconUrl && <img src={visual.iconUrl} alt="" onError={(event) => { event.currentTarget.hidden = true }} />}
                  <span>{visual.fallback}</span>
                </span>
                {technology}
              </li>
            )
          })}
        </ul>
        {expanded && (
          <ul className="feature-list">
            {project.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        <div className="project-links">
          <a
            className="project-github-link"
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver ${project.name} en GitHub`}
            title="Ver repositorio en GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </article>
  )
}
