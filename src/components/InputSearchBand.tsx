import type { InputProps } from '../utils/types'

export default function InputSearchBand({ query, onChangeHandler }: InputProps) {
  return (
    <div className="inputSearch">
      <input
        type="text"
        value={query}
        onChange={onChangeHandler}
        placeholder="Nom du groupe"
      />
    </div>
  )
}
