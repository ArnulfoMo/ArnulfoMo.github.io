import { personal } from '../data/personal'
import { Technologies } from '../components/home/Technologies'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactCTA } from '../components/ContactCTA'

export function About() {
  return <><div className="page-heading"><p className="eyebrow">DETRÁS DEL CÓDIGO</p><h1>Sobre mí<span className="accent">.</span></h1><p>{personal.summary}</p></div><section className="section about-summary"><SectionHeading number="01" title="Mi enfoque" /><div><p>{personal.biography}</p><p className="muted mt-5">{personal.interests}</p></div></section><section className="section"><SectionHeading number="02" title="Tecnologías" /><Technologies /></section><section className="section"><SectionHeading number="03" title="Formación académica" /><div className="education"><span className="pending-label">Por completar</span><h3>{personal.education.degree}</h3><p>{personal.education.institution}</p><p className="muted">{personal.education.period}</p></div></section><ContactCTA /></>
}
