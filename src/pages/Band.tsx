import { Suspense } from 'react'
import { useParams, Link } from 'react-router'
import ListAlbums from '../components/AlbumsList'
import getAlbumsByBand from '../services/getAlbumsByBand'

const fetchAlbumsByBand = async (uuid = "") => {
  const res = await getAlbumsByBand(uuid)
  return res.json()
}

export default function Band() {
  const { uuid } = useParams<{ uuid: string }>()
  const fetchAlbumsPromise = fetchAlbumsByBand(uuid)

  return (
    <>
      <Suspense
        fallback={
          <p>Loading...</p>
        }
      >
        <div className="breadcrumbs">
          <Link to={`/`}>Retour</Link>
        </div>
        <ListAlbums fetchAlbumsPromise={fetchAlbumsPromise} />
      </Suspense>
    </>
  )
}
