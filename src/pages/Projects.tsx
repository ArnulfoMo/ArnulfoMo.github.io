import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ContactCTA } from '../components/ContactCTA'

export function Projects() {
  const [category, setCategory] = useState('Todos')
  const categories = ['Todos', ...new Set(projects.map(project => project.category))]
  const visible = projects.filter(project => category === 'Todos' || project.category === category)
  return <><div className="page-heading"><p className="eyebrow">IDEAS QUE TOMAN FORMA</p><h1>Proyectos<span className="accent">.</span></h1><p>Software, sistemas y soluciones. Una mirada al problema, al proceso y al código.</p><p className="content-note">Los proyectos actuales son placeholders para sustituir por trabajos reales.</p></div><div className="filters" aria-label="Filtrar proyectos por categoría">{categories.map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)}>{value}<span>{value === 'Todos' ? projects.length : projects.filter(project => project.category === value).length}</span></button>)}</div><p className="sr-only" role="status">{visible.length} proyectos mostrados</p><div className="project-grid projects-full">{visible.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} expanded />)}</div><ContactCTA /></>
}
