import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CopyIcon, DownloadIcon, GitHubIcon } from '../ui/ActionIcons'
import { Arrow } from '../ui/Arrow'

interface HeroActionsProps {
  cvUrl: string
  email: string
  githubUrl?: string
}

const COPY_CONFIRMATION_DURATION_MS = 1800

export function HeroActions({ cvUrl, email, githubUrl }: HeroActionsProps) {
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const copyResetTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => window.clearTimeout(copyResetTimeout.current), [])

  const handleCopyEmail = async () => {
    if (!email) return

    try {
      await navigator.clipboard.writeText(email)
      setIsEmailCopied(true)
      window.clearTimeout(copyResetTimeout.current)
      copyResetTimeout.current = window.setTimeout(
        () => setIsEmailCopied(false),
        COPY_CONFIRMATION_DURATION_MS,
      )
    } catch {
      setIsEmailCopied(false)
    }
  }

  return (
    <div className="hero-actions">
      <Link className="button button-primary" to="/proyectos">
        Explorar proyectos
        <Arrow />
      </Link>

      {githubUrl ? (
        <a className="button button-secondary action-button" href={githubUrl} target="_blank" rel="noreferrer">
          <GitHubIcon />
          GitHub
        </a>
      ) : (
        <span className="button button-secondary action-button is-disabled" title="Agrega tu enlace de GitHub en src/data/personal.ts">
          <GitHubIcon />
          GitHub
        </span>
      )}

      <button
        className="button button-secondary action-button"
        type="button"
        onClick={handleCopyEmail}
        disabled={!email}
        title={email ? 'Copiar correo electrónico' : 'Agrega tu correo en src/data/personal.ts'}
      >
        <CopyIcon />
        {isEmailCopied ? 'Correo copiado' : email || 'Agregar correo'}
      </button>

      {cvUrl ? (
        <a className="button button-secondary action-button" href={cvUrl} download>
          <DownloadIcon />
          Descargar CV
        </a>
      ) : (
        <span className="button button-secondary action-button is-disabled" title="Agrega tu CV en public/ y su ruta en src/data/personal.ts">
          <DownloadIcon />
          Descargar CV
        </span>
      )}
    </div>
  )
}
