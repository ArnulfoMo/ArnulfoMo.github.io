import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ContactCTA } from '../components/ContactCTA'

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const categories = ['Todos', ...new Set(projects.map(project => project.category))]
  const visibleProjects = projects.filter((project) => selectedCategory === 'Todos' || project.category === selectedCategory)

  const getCategoryCount = (category: string) => (
    category === 'Todos' ? projects.length : projects.filter((project) => project.category === category).length
  )

  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">IDEAS QUE TOMAN FORMA</p>
        <h1>Proyectos<span className="accent">.</span></h1>
        <p>Software, sistemas y soluciones. Una mirada al problema, al proceso y al código.</p>
      </div>
      <div className="filters" aria-label="Filtrar proyectos por categoría">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            <span>{getCategoryCount(category)}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} proyectos mostrados</p>
      <div className="project-grid projects-full">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} expanded />
        ))}
      </div>
      <ContactCTA />
    </>
  )
}
