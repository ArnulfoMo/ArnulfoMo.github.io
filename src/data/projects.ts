import type { Project } from '../types/portfolio'
import apiImage from '../assets/coliflor.jpg'

// Importa aquí las capturas que guardes en src/assets, por ejemplo:
// import backendImage from '../assets/backend.jpg'
// Ejemplos de estructura, no proyectos realizados. Reemplazar con información real.
export const projects: Project[] = [
  {
    id: 'api', name: '[Agregar proyecto de API]', category: 'API REST',
    description: '[Describe el problema que resuelve tu API y qué construiste para solucionarlo.]',
    technologies: ['[Lenguaje]', '[Framework]', '[Base de datos]'],
    features: ['[Agregar funcionalidad principal]', '[Agregar decisión técnica relevante]'],
    image: { src: apiImage, alt: 'Vista previa del proyecto API' },
    featured: true, placeholder: true,
  },
  {
    id: 'backend', name: '[Agregar sistema backend]', category: 'Backend',
    description: '[Explica el propósito del sistema, tu contribución y el resultado del desarrollo.]',
    technologies: ['[Lenguaje]', '[Base de datos]'],
    features: ['[Agregar funcionalidad principal]', '[Agregar decisión de arquitectura]'],
    // image: { src: backendImage, alt: 'Vista previa del sistema backend' },
    featured: true, placeholder: true,
  },
  {
    id: 'web', name: '[Agregar aplicación web]', category: 'Aplicación web',
    description: '[Presenta el problema, la aplicación que construiste y el alcance de tu participación.]',
    technologies: ['[Frontend]', '[Backend]'],
    features: ['[Agregar funcionalidad principal]', '[Agregar resultado verificable]'],
    // image: { src: webImage, alt: 'Vista previa de la aplicación web' },
    featured: true, placeholder: true,
  },
]
