import type { TechnologyGroup } from '../types/portfolio'

export const technologies: TechnologyGroup[] = [
  {
    name: 'Frontend',
    symbol: '</>',
    items: [
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', iconFallback: '</>' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', iconFallback: '#' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', iconFallback: 'JS' },
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', iconFallback: '⚛' },
      { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', iconFallback: 'ϟ' },
    ],
  },
  {
    name: 'Backend',
    symbol: '{ }',
    items: [
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', iconFallback: 'php' },
      { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', iconFallback: 'L' },
    ],
  },
  {
    name: 'Bases de datos',
    symbol: '▤',
    items: [
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', iconFallback: '◫' },
      { name: 'SQL Server', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', iconFallback: 'SQL' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', iconFallback: 'M' },
      { name: 'Oracle', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', iconFallback: 'O' },
    ],
  },
  {
    name: 'APIs y herramientas',
    symbol: '⌘',
    items: [
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', iconFallback: '◆' },
      { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', iconFallback: '⌘' },
      { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', iconFallback: '›_' },
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', iconFallback: '<>' },
      { name: 'XAMPP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xampp/xampp-original.svg', iconFallback: 'X' },
    ],
  },
]
