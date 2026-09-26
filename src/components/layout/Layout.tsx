import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { personal } from '../../data/personal'

interface NavigationItem {
  path: string
  label: string
}

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/experiencia', label: 'Experiencia' },
  { path: '/sobre-mi', label: 'Sobre mí' },
  { path: '/contacto', label: 'Contacto' },
]

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  const previousPathname = useRef(location.pathname)

  useEffect(() => {
    const pageLabel = navigationItems.find((item) => item.path === location.pathname)?.label ?? 'Página no encontrada'

    document.title = `${pageLabel === 'Inicio' ? personal.name : `${pageLabel} · ${personal.name}`} | ${personal.role}`
    if (previousPathname.current !== location.pathname) {
      window.scrollTo(0, 0)
      document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
      previousPathname.current = location.pathname
    }
  }, [location.pathname])

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Escape') return

    setIsMenuOpen(false)
    menuButton.current?.focus()
  }

  return (
    <>
    <a href="#main-content" className="skip-link">Saltar al contenido</a>
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label={`${personal.name}, inicio`} onClick={() => setIsMenuOpen(false)}>
          AM<span>.</span>
        </Link>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? 'Cerrar ×' : 'Menú ☰'}
        </button>
        <nav
          id="main-navigation"
          className={isMenuOpen ? 'navigation is-open' : 'navigation'}
          aria-label="Navegación principal"
          onKeyDown={handleNavigationKeyDown}
        >
          {navigationItems.map(({ path, label }) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={() => setIsMenuOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
      <main id="main-content" tabIndex={-1} className="container">
        <Outlet />
      </main>
      <footer className="container site-footer">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <span>Software con propósito<span className="accent">.</span></span>
      </footer>
    </>
  )
}
