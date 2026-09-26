import { personal } from '../data/personal'
import { Arrow } from '../components/ui/Arrow'

export function Contact() {
  const channels = [{ label: 'Correo electrónico', url: personal.email ? `mailto:${personal.email}` : '', placeholder: '[Agregar correo electrónico]' }, ...personal.links]
  return <><div className="page-heading"><p className="eyebrow">HABLEMOS</p><h1>Todo empieza con<br />una conversación<span className="accent">.</span></h1><p>¿Tienes un proyecto, una pregunta o una oportunidad profesional? Encuentra aquí mis medios de contacto.</p></div><section aria-label="Medios de contacto" className="contact-channels">{channels.map((channel, index) => <div className="contact-channel" key={channel.label}><span className="section-number">0{index + 1}</span><div><h2>{channel.label}</h2>{channel.url ? <a className="text-link" href={channel.url} target={channel.url.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{channel.url.replace('mailto:', '')}<Arrow diagonal /></a> : <p className="muted">{channel.placeholder}</p>}</div>{!channel.url && <span className="pending-label">Por completar</span>}</div>)}</section><p className="contact-note">Los enlaces de contacto se habilitarán al agregar los datos reales.</p></>
}
