import { personal } from '../data/personal'
import { Technologies } from '../components/home/Technologies'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactCTA } from '../components/ContactCTA'

export function About() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">DETRÁS DEL CÓDIGO</p>
        <h1>Sobre mí<span className="accent">.</span></h1>
        <p>{personal.summary}</p>
      </div>
      <section className="section about-summary">
        <SectionHeading title="Mi enfoque" />
        <div>
          <p>{personal.biography}</p>
          <p className="muted mt-5">{personal.interests}</p>
        </div>
      </section>
      <section className="section">
        <SectionHeading title="Skills" />
        <Technologies />
      </section>
      <section className="section">
        <SectionHeading title="Formación académica" />
        <div className="education-list">
          {personal.education.map((education) => (
            <article className="education" key={`${education.degree}-${education.period}`}>
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <p className="muted">{education.period}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
