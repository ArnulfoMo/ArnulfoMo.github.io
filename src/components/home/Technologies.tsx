import { technologies } from '../../data/technologies'

export function Technologies() {
  return (
    <div className="technology-grid">
      {technologies.map((group) => (
        <article key={group.name} className="technology-group">
          <span className="technology-symbol" aria-hidden="true">{group.symbol}</span>
          <h3>{group.name}</h3>
          <div className="technology-items">
            {group.items.map((technology) => (
              <span className="technology-item" key={technology.name}>
                <span className="technology-icon" aria-hidden="true">
                  <img src={technology.iconUrl} alt="" onError={(event) => { event.currentTarget.hidden = true }} />
                  <span>{technology.iconFallback}</span>
                </span>
                {technology.name}
              </span>
            ))}
          </div>
          {group.placeholder && <span className="pending-label">Por completar</span>}
        </article>
      ))}
    </div>
  )
}
