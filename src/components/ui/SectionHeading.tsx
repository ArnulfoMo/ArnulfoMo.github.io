import { Link } from 'react-router-dom'
import { Arrow } from './Arrow'

export function SectionHeading({ number, title, to, link }: { number: string; title: string; to?: string; link?: string }) {
  return <div className="section-heading"><h2><span className="section-number">{number}</span>{title}</h2>{to && <Link className="text-link" to={to}>{link}<Arrow /></Link>}</div>
}
