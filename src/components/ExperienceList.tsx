import { experience } from '../data/experience'

interface ExperienceListProps {
  compact?: boolean
}

export function ExperienceList({ compact = false }: ExperienceListProps) {
  const visibleExperience = compact ? experience.slice(0, 2) : experience

  return (
    <div className="timeline">
      {visibleExperience.map((item) => (
        <article className="experience-item" key={item.id}>
          <div className="experience-date">
            <span className="timeline-dot" />
            {item.period}
            {item.placeholder && <span className="pending-label">Por completar</span>}
          </div>
          <div>
            <h3>{item.role}</h3>
            <p className="organization">{item.organization}</p>
            <p className="muted">{item.description}</p>
            {!compact && (
              <>
                <ul className="feature-list">
                  {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </ul>
                <ul className="tags">
                  {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
