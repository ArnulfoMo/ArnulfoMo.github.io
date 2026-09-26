import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { personal } from '../../data/personal'

const navigation = [['/', 'Inicio'], ['/proyectos', 'Proyectos'], ['/experiencia', 'Experiencia'], ['/sobre-mi', 'Sobre mí'], ['/contacto', 'Contacto']]

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  const initialPath = useRef(location.pathname)
  useEffect(() => {
    const label = navigation.find(([path]) => path === location.pathname)?.[1] ?? 'Página no encontrada'
    document.title = `${label === 'Inicio' ? personal.name : `${label} · ${personal.name}`} | ${personal.role}`
    if (initialPath.current !== location.pathname) {
      window.scrollTo(0, 0)
      document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
      initialPath.current = location.pathname
    }
  }, [location.pathname])
  return <>
    <a href="#main-content" className="skip-link">Saltar al contenido</a>
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label={`${personal.name}, inicio`} onClick={() => setOpen(false)}>AM<span>.</span></Link>
        <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Cerrar ×' : 'Menú ☰'}</button>
        <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal" onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() } }}>
          {navigation.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
    <main id="main-content" tabIndex={-1} className="container"><Outlet /></main>
    <footer className="container site-footer"><p>© {new Date().getFullYear()} {personal.name}</p><span>Software con propósito<span className="accent">.</span></span></footer>
  </>
}
