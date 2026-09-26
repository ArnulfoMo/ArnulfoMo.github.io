import { technologies } from '../../data/technologies'

export function Technologies() {
  return <div className="technology-grid">{technologies.map(group => <div key={group.name} className="technology-group"><span className="technology-symbol" aria-hidden="true">{group.symbol}</span><h3>{group.name}</h3><div className="technology-items">{group.items.map(item => <span key={item}>{item}</span>)}</div>{group.placeholder && <span className="pending-label">Por completar</span>}</div>)}</div>
}
