import { technologies } from '../../data/technologies'

const iconFallbacks: Record<string, string> = {
  HTML5: '</>',
  CSS3: '#',
  JavaScript: 'JS',
  React: '⚛',
  Vite: 'ϟ',
  PHP: 'php',
  Laravel: 'L',
  MySQL: '◫',
  'SQL Server': 'SQL',
  MongoDB: 'M',
  Oracle: 'O',
  Git: '◆',
  GitHub: '⌘',
  Postman: '›_',
  'VS Code': '<>',
  XAMPP: 'X',
}

const iconUrls: Record<string, string> = {
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  Laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  Oracle: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  XAMPP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xampp/xampp-original.svg',
}

export function Technologies() {
  return <div className="technology-grid">{technologies.map(group => <div key={group.name} className="technology-group"><span className="technology-symbol" aria-hidden="true">{group.symbol}</span><h3>{group.name}</h3><div className="technology-items">{group.items.map(item => <span className="technology-item" key={item}><span className="technology-icon" aria-hidden="true"><img src={iconUrls[item]} alt="" onError={(event) => { event.currentTarget.hidden = true }} /><span>{iconFallbacks[item] ?? '•'}</span></span>{item}</span>)}</div>{group.placeholder && <span className="pending-label">Por completar</span>}</div>)}</div>
}
