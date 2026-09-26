import { Link } from 'react-router-dom'
import { Arrow } from './Arrow'

interface SectionHeadingProps {
  title: string
  to?: string
  link?: string
}

export function SectionHeading({ title, to, link }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {to && link && (
        <Link className="text-link" to={to}>
          {link}
          <Arrow />
        </Link>
      )}
    </div>
  )
}
