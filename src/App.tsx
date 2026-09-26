import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="experiencia" element={<Experience />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
