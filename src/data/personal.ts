import type { ProfessionalLink } from '../types/portfolio'

export const personal = {
  name: 'Arnulfo Moreno Melara',
  initials: 'AM',
  role: 'Backend Developer',
  introduction: 'Desarrollo de software con enfoque en backend, APIs y bases de datos.',
  summary: 'Mi orientación profesional está en el desarrollo de software, especialmente en el backend. Este espacio reúne mi perfil, proyectos y trayectoria.',
  biography: '[Agregar descripción profesional: tu enfoque de trabajo, intereses y objetivos.]',
  interests: '[Agregar áreas de interés y lo que te gustaría construir.]',
  education: { degree: '[Agregar formación académica]', institution: '[Agregar institución]', period: '[Agregar período]' },
  email: 'arnulfo05@gmail.com',
  cvUrl: '', // Ejemplo: '/cv-arnulfo-moreno.pdf', con el archivo dentro de public/.
  links: [
    { label: 'GitHub', url: 'https://github.com/ArnulfoMo', placeholder: '[Agregar URL de GitHub]' },
    { label: 'LinkedIn', url: '', placeholder: '[Agregar URL de LinkedIn]' },
  ] satisfies ProfessionalLink[],
}
