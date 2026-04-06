import { Link } from 'react-router'
import type { BandsListProps } from '../utils/types'

export default function BandsList({ loading, error, items }: BandsListProps) {
  return (
    <div className="bandList">
      {loading && <div>Chargement…</div>}
      {error && <div style={{ color: "red" }}>Erreur: {error}</div>}

      <ul>
        {items.length === 0 && !loading ? (
          <li>Aucun groupe ne correspond à la recherche</li>
        ) : (
          items.map((band) => {
            return <li key={band.uuid}>
              <Link to={`/band/${band.uuid}`}>
                {band.name}
              </Link>
            </li>
            }
          )
        )}
      </ul>
    </div>
  )
}
