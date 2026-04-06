export default function getBands(term = ""): Promise<Response> {
  return fetch('http://localhost:6732/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        searchBands(term: "${term}") {
          uuid
          name
        }
      }`
    }),
  })
}