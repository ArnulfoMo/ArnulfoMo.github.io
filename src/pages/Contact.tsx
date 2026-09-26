import { personal } from '../data/personal'
import { Arrow } from '../components/ui/Arrow'

interface ContactChannel {
  label: string
  url?: string
  placeholder: string
}

export function Contact() {
  const contactChannels: ContactChannel[] = [
    {
      label: 'Correo electrónico',
      url: personal.email ? `mailto:${personal.email}` : undefined,
      placeholder: '[Agregar correo electrónico]',
    },
    ...personal.links,
  ]

  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">HABLEMOS</p>
        <h1>Todo empieza con<br />una conversación<span className="accent">.</span></h1>
        <p>¿Tienes un proyecto, una pregunta o una oportunidad profesional? Encuentra aquí mis medios de contacto.</p>
      </div>
      <section aria-label="Medios de contacto" className="contact-channels">
        {contactChannels.map((channel, index) => {
          const isEmail = channel.url?.startsWith('mailto:')

          return (
            <div className="contact-channel" key={channel.label}>
              <span className="section-number">0{index + 1}</span>
              <div>
                <h2>{channel.label}</h2>
                {channel.url ? (
                  <a className="text-link" href={channel.url} target={isEmail ? undefined : '_blank'} rel="noreferrer">
                    {channel.url.replace('mailto:', '')}
                    <Arrow diagonal />
                  </a>
                ) : <p className="muted">{channel.placeholder}</p>}
              </div>
              {!channel.url && <span className="pending-label">Por completar</span>}
            </div>
          )
        })}
      </section>
      <p className="contact-note">Los enlaces de contacto se habilitarán al agregar los datos reales.</p>
    </>
  )
}
