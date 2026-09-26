interface ArrowProps {
  diagonal?: boolean
}

export function Arrow({ diagonal = false }: ArrowProps) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}
