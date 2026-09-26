import { Link } from 'react-router-dom'
import { Arrow } from './Arrow'

export function SectionHeading({ title, to, link }: { title: string; to?: string; link?: string }) {
  return <div className="section-heading"><h2>{title}</h2>{to && <Link className="text-link" to={to}>{link}<Arrow /></Link>}</div>
}
