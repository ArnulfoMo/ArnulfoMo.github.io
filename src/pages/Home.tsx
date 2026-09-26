import { useState } from 'react'
import { Link } from 'react-router-dom'
import { personal } from '../data/personal'
import { projects } from '../data/projects'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Arrow } from '../components/ui/Arrow'
import { Technologies } from '../components/home/Technologies'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ExperienceList } from '../components/ExperienceList'
import { ContactCTA } from '../components/ContactCTA'

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.7c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6 1 .07 1.51 1.01 1.51 1.01.87 1.48 2.29 1.05 2.85.8.09-.63.34-1.05.62-1.29-2.18-.25-4.47-1.08-4.47-4.85 0-1.07.39-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.26 2.68 1.01A9.3 9.3 0 0 1 12 7.65c.83 0 1.67.11 2.45.33 1.86-1.27 2.68-1.01 2.68-1.01.54 1.35.2 2.35.1 2.6.64.69 1.02 1.57 1.02 2.64 0 3.78-2.3 4.59-4.48 4.83.35.3.66.88.66 1.77v2.23c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.5Z" /></svg>
}

function CopyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h7A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H16v3.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 18.5v-7A2.5 2.5 0 0 1 6.5 9H8v2H6.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V15h-3.5A2.5 2.5 0 0 1 8 12.5V7Zm2 0v5.5c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7Z" /></svg>
}

function DownloadIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 3h2v9.17l3.59-3.58L18 10l-6 6-6-6 1.41-1.41L11 12.17V3Zm-6 15h14v3H5v-3Z" /></svg>
}

export function Home() {
  const [copied, setCopied] = useState(false)
  const githubUrl = personal.links.find((link) => link.label === 'GitHub')?.url
  const copyEmail = async () => {
    if (!personal.email) return
    await navigator.clipboard.writeText(personal.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <>
    <section className="hero">
      <div className="hero-top"><span className="avatar" aria-hidden="true">{personal.initials}</span><span className="eyebrow">HOLA, SOY {personal.name}</span></div>
      <p className="hero-greeting">Especializado en construir la parte que hace funcionar cada producto.</p>
      <h1 className="hero-role">{personal.role}<span className="code-cursor" aria-hidden="true">_</span></h1>
      <p className="hero-name">{personal.name}</p>
      <p className="hero-description">{personal.introduction}</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/proyectos">Explorar proyectos<Arrow /></Link>
        {githubUrl ? <a className="button button-secondary action-button" href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a> : <span className="button button-secondary action-button is-disabled" title="Agrega tu enlace de GitHub en src/data/personal.ts"><GitHubIcon />GitHub</span>}
        <button className="button button-secondary action-button" type="button" onClick={copyEmail} disabled={!personal.email} title={personal.email ? 'Copiar correo electrónico' : 'Agrega tu correo en src/data/personal.ts'}><CopyIcon />{copied ? 'Correo copiado' : personal.email || 'Agregar correo'}</button>
        {personal.cvUrl ? <a className="button button-secondary action-button" href={personal.cvUrl} download><DownloadIcon />Descargar CV</a> : <span className="button button-secondary action-button is-disabled" title="Agrega tu CV en public/ y su ruta en src/data/personal.ts"><DownloadIcon />Descargar CV</span>}
      </div>
      <div className="hero-note"><span className="tiny-dot" />BACKEND · SOFTWARE · DESARROLLO WEB</div>
      <span className="hero-code" aria-hidden="true">{'{ }'}</span>
    </section>
    <section className="section"><SectionHeading number="01" title="Proyectos destacados" to="/proyectos" link="Ver todos los proyectos" /><p className="section-intro">Del problema a la solución. Un espacio para mostrar lo que construyo.</p><div className="project-grid">{projects.filter(project => project.featured).slice(0, 3).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></section>
    <section className="section about-summary"><SectionHeading number="02" title="Un poco sobre mí" /><div><p>{personal.summary}</p><Link className="text-link" to="/sobre-mi">Conocer más sobre mí<Arrow /></Link></div></section>
    <section className="section"><SectionHeading number="03" title="Mi caja de herramientas" /><p className="section-intro">Tecnologías y herramientas que dan forma al desarrollo.<span className="content-note"> Selección pendiente de completar.</span></p><Technologies /></section>
    <section className="section"><SectionHeading number="04" title="Experiencia" to="/experiencia" link="Ver experiencia completa" /><ExperienceList compact /></section>
    <ContactCTA />
  </>
}
