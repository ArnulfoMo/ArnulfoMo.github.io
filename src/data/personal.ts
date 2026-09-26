import type { PortfolioProfile } from '../types/portfolio'

export const personal: PortfolioProfile = {
  name: 'Arnulfo Moreno Melara',
  initials: 'AM',
  role: 'Backend Developer',
  introduction: 'Desarrollo de software con enfoque en backend, APIs y bases de datos.',
  summary: 'Mi orientación profesional está en el desarrollo de software, especialmente en el backend. Este espacio reúne mi perfil, proyectos y trayectoria.',
  biography: 'Construyo soluciones pensando más allá de que simplemente funcionen: busco que sean claras, eficientes y fáciles de mantener.',
  interests: 'Me especializo en desarrollo backend y bases de datos, con interés en crear aplicaciones sólidas, resolver problemas reales y aportar valor a través de la tecnología.',
  education: [
    {
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Nacional Autónoma de Honduras (UNAH)',
      period: '2024 – Actualidad',
    },
    {
      degree: 'Escuela e Instituto Técnico en Electricidad, Electrónica y Computación (ITEEC)',
      institution: 'ITEEC',
      period: '2018 – 2023',
    },
  ],
  email: 'arnulfo05@gmail.com',
  cvUrl: '',
  links: [
    { label: 'GitHub', url: 'https://github.com/ArnulfoMo', placeholder: '[Agregar URL de GitHub]' },
    { label: 'LinkedIn', url: '', placeholder: '[Agregar URL de LinkedIn]' },
  ],
}
