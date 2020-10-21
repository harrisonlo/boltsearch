import React, { FC, useState, useEffect } from 'react'
import { prepare, search, highlight, TextObject, SearchResults } from 'boltsearch'
import InputBase from '@material-ui/core/InputBase'
import words from '../datasets/words'

const Words: FC = () => {
  const [preparedItems, setPreparedItems] = useState<{ text: TextObject }[]>([])
  const [prepareTime, setPrepareTime] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTime, setSearchTime] = useState(0)
  const [searchResults, setSearchResults] = useState<SearchResults>([])

  useEffect(() => {
    const start = Date.now()
    const prepared = words.map(word => ({ text: prepare(word) }))
    const time = Date.now() - start
    setPreparedItems(prepared)
    setPrepareTime(time)
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setSearchTime(0)
      setSearchResults([])
      return
    }
    const start = Date.now()
    const results = search(searchTerm, preparedItems, { key: 'text', limit: 50 })
    const time = Date.now() - start
    setSearchResults(results)
    setSearchTime(time)
  }, [searchTerm, preparedItems])

  return (<>
    <p className='timer'>✔ {preparedItems.length} simple strings prepared in {prepareTime}ms</p>
    <InputBase 
      value={searchTerm}
      placeholder='Search from 58110 words'
      onChange={e => setSearchTerm(e.target.value)}
      autoFocus
    />
    {searchTerm && <p className='timer'>{searchResults.length} matches found in {searchTime}ms</p>}
    <ul>
      {searchResults.map(result => (
        <li 
          dangerouslySetInnerHTML={{ __html: highlight(result.match) }} 
          key={result.index} 
        />
      ))}
    </ul>
  </>)
}

export default Words