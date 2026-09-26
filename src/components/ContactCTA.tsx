import { Link } from 'react-router-dom'
import { Arrow } from './ui/Arrow'

export function ContactCTA() {
  return <section className="contact-cta"><div><p className="eyebrow">SIGUIENTE CONVERSACIÓN</p><h2>¿Construimos algo juntos<span className="accent">?</span></h2><p className="muted">Un proyecto, una idea o una oportunidad. Hablemos.</p></div><Link to="/contacto" className="button button-primary">Contactar<Arrow diagonal /></Link></section>
}
