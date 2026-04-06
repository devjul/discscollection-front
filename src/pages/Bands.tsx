import React, { useEffect, useState } from 'react'
import getBands from '../services/getBands'
import BandsList from '../components/BandsList'
import InputSearchBand from '../components/InputSearchBand'
import type { Band } from '../utils/types'

export default function Bands() {
  const [query, setQuery] = useState<string>("")
  const [items, setItems] = useState<Band[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchItems = async (q = ""): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      const res = await getBands(q)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      
      const data = await res.json()
      setItems(Array.isArray(data.data.searchBands) ? data.data.searchBands as Band[] : [])
    } catch (err) {
      setError((err as Error).message)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  // init fetch
  useEffect(() => {
    fetchItems()
  }, [])

  // refetch
  useEffect(() => {
    fetchItems(query)
  }, [query])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  return (
    <div id="bandPage">
      <InputSearchBand onChangeHandler={onChangeHandler} query={query} />

      <BandsList items={items} loading={loading} error={error} />
    </div>
  )
}