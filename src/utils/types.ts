export interface Band {
  uuid: string
  name: string
}

export interface Album {
  uuid: string
  name: string
}

type getAlbumsResponse = {
  getAlbumsByBand: Album[]
}

export interface graphqlAlbumsListResponse {
  data: getAlbumsResponse
}

export interface BandsListProps {
  items: Band[]
  loading: boolean
  error: string | null
}

export interface InputProps {
  query: string, 
  onChangeHandler: React.ChangeEventHandler
}
