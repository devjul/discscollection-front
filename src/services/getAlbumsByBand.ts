export default function getAlbumsByBand(uuid = ""): Promise<Response> {
  return fetch('http://localhost:6732/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        getAlbumsByBand(band_uuid: "${uuid}") {
          uuid
          name
        }
      }`
    }),
  })
}