import type { Project } from '../types/portfolio'
import finTrackImage from '../assets/fintrack-mockup.png'
import helpDeskImage from '../assets/helpdesk-mockup.png'
import stockFlowImage from '../assets/stockflow-mockup.png'

// Las imágenes de proyectos se importan desde src/assets para que Vite las optimice en el build.
export const projects: Project[] = [
  {
    id: 'stockflow',
    name: 'StockFlow — Gestión de Inventario',
    category: 'Gestión de inventario',
    description: 'Plataforma web para administrar productos, movimientos y existencias, con alertas de stock y un dashboard de seguimiento.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'REST API'],
    features: [
      'CRUD de productos e inventario con relaciones de base de datos.',
      'Autenticación, validaciones y control de entradas y salidas.',
      'Alertas de stock y dashboard con indicadores de seguimiento.',
    ],
    image: { src: stockFlowImage, alt: 'Mockup del dashboard web y móvil de StockFlow' },
    featured: true,
  },
  {
    id: 'fintrack',
    name: 'FinTrack — Finanzas Personales',
    category: 'API REST',
    description: 'Aplicación para controlar ingresos, gastos y presupuestos mediante una API REST clara y escalable.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'React'],
    features: [
      'Endpoints para ingresos, gastos, presupuestos y transacciones.',
      'Autenticación, filtros, validaciones y consultas de datos.',
      'Estadísticas y límites mensuales para el seguimiento financiero.',
    ],
    image: { src: finTrackImage, alt: 'Mockup del dashboard web y móvil de FinTrack' },
    featured: true,
  },
  {
    id: 'helpdesk',
    name: 'HelpDesk — Gestión de Tickets',
    category: 'Sistema de soporte',
    description: 'Sistema para registrar, asignar y dar seguimiento a tickets con roles, prioridades e historial de cambios.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'REST API'],
    features: [
      'Registro, asignación y seguimiento de solicitudes de usuarios.',
      'Roles, permisos, prioridades y estados de atención.',
      'Historial de cambios y panel de administración de casos pendientes.',
    ],
    image: { src: helpDeskImage, alt: 'Mockup del dashboard web y móvil de HelpDesk' },
    featured: true,
  },
]
