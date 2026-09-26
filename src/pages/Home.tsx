import { Link } from 'react-router-dom'
import { ContactCTA } from '../components/ContactCTA'
import { ExperienceList } from '../components/ExperienceList'
import { HeroActions } from '../components/home/HeroActions'
import { Technologies } from '../components/home/Technologies'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Arrow } from '../components/ui/Arrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { personal } from '../data/personal'
import { projects } from '../data/projects'

export function Home() {
  const githubUrl = personal.links.find((link) => link.label === 'GitHub')?.url

  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <span className="avatar" aria-hidden="true">{personal.initials}</span>
          <div className="hero-identity">
            <span className="eyebrow">HOLA, SOY</span>
            <span className="hero-identity-name">{personal.name}</span>
          </div>
        </div>
        <p className="hero-greeting">Especializado en construir la parte que hace funcionar cada producto.</p>
        <h1 className="hero-role">
          {personal.role}<span className="code-cursor" aria-hidden="true">_</span>
        </h1>
        <p className="hero-description">{personal.introduction}</p>
        <HeroActions cvUrl={personal.cvUrl} email={personal.email} githubUrl={githubUrl} />
        <div className="hero-note"><span className="tiny-dot" />BACKEND · SOFTWARE · DESARROLLO WEB</div>
        <span className="hero-code" aria-hidden="true">{'{ }'}</span>
      </section>
      <section className="section">
        <SectionHeading title="Proyectos destacados" to="/proyectos" link="Ver todos los proyectos" />
        <p className="section-intro">Del problema a la solución. Un espacio para mostrar lo que construyo.</p>
        <div className="project-grid">
          {projects.filter((project) => project.featured).slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading title="Experiencia" to="/experiencia" link="Ver experiencia completa" />
        <ExperienceList compact />
      </section>
      <section className="section">
        <SectionHeading title="Skills" />
        <p className="section-intro">Tecnologías y herramientas que utilizo para construir soluciones.</p>
        <Technologies />
      </section>
      <section className="section about-summary">
        <SectionHeading title="Un poco sobre mí" />
        <div>
          <p>{personal.summary}</p>
          <Link className="text-link" to="/sobre-mi">
            Conocer más sobre mí
            <Arrow />
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
