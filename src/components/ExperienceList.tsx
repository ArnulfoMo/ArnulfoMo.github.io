import { experience } from '../data/experience'

export function ExperienceList({ compact = false }: { compact?: boolean }) {
  return <div className="timeline">{(compact ? experience.slice(0, 2) : experience).map(item => <article className="experience-item" key={item.id}>
    <div className="experience-date"><span className="timeline-dot" />{item.period}{item.placeholder && <span className="pending-label">Por completar</span>}</div>
    <div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p className="muted">{item.description}</p>{!compact && <><ul className="feature-list">{item.responsibilities.map(value => <li key={value}>{value}</li>)}</ul><ul className="tags">{item.technologies.map(value => <li key={value}>{value}</li>)}</ul></>}</div>
  </article>)}</div>
}
