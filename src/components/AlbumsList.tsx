import { use } from 'react'

import type { Album, graphqlAlbumsListResponse } from '../utils/types'

export default function AlbumsList({ fetchAlbumsPromise }: { fetchAlbumsPromise: Promise<graphqlAlbumsListResponse> }) {
  const albums = use(fetchAlbumsPromise)
  const items = Array.isArray(albums.data.getAlbumsByBand) ? (albums.data.getAlbumsByBand as Album[]) : []

  return (
    <ul>
      {items.map((album) => (
        <li key={album.uuid}>
          <div>
            <img src={`/covers/${album.uuid}.jpg`} height={100} />
          </div>
          <p>
            {album.name}
          </p>
        </li>
      ))}
    </ul>
  )
}
