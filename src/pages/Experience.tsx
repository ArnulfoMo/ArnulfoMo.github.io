import { ExperienceList } from '../components/ExperienceList'
import { ContactCTA } from '../components/ContactCTA'

export function Experience() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">TRAYECTORIA PROFESIONAL</p>
        <h1>Experiencia<span className="accent">.</span></h1>
        <p>El contexto, las responsabilidades y las contribuciones detrás de cada etapa.</p>
      </div>
      <ExperienceList />
      <ContactCTA />
    </>
  )
}
