import React, { FC, useState, useEffect } from 'react'
import { prepare, search, highlight, TextObject, SearchResults } from 'boltsearch'
import InputBase from '@material-ui/core/InputBase'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import movies from '../datasets/movies'

type Movie = {
  title: TextObject
  description: TextObject
  rating: number
  year: string
  tags: {
    genres: string[]
    actors: string[]
    genresText: TextObject
    actorsText: TextObject
  }
}

const Movies: FC = () => {
  const [preparedItems, setPreparedItems] = useState<Movie[]>([])
  const [prepareTime, setPrepareTime] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTime, setSearchTime] = useState(0)
  const [searchResults, setSearchResults] = useState<SearchResults>([])

  useEffect(() => {
    const start = Date.now()
    const prepared = movies.map(movie => ({
      title: prepare(movie.title),
      description: prepare(movie.description),
      rating: movie.rating,
      year: movie.year,
      tags: {
        genres: movie.genres,
        actors: movie.actors,
        genresText: prepare(movie.genres.join(' ')),
        actorsText: prepare(movie.actors.join(' '))
      }
    }))
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
    const options = {
      keys: ['title', 'description', 'tags.genresText', 'tags.actorsText'],
      weights: [100000, -2000, 0, 50000],
      threshold: -5000,
      limit: 100
    }
    const results = search(searchTerm, preparedItems, options)
    const time = Date.now() - start
    setSearchResults(results)
    setSearchTime(time)
  }, [searchTerm, preparedItems])

  return (<>
    <p className='timer'>✔ {preparedItems.length} complex objects prepared in {prepareTime}ms</p>
    <InputBase
      value={searchTerm}
      placeholder='Search from 250 movies'
      onChange={e => setSearchTerm(e.target.value)}
      autoFocus
    />
    {searchTime > 0 && <p className='timer'>{searchResults.length} matches found in {searchTime}ms</p>}
    <div>
      {searchResults.slice(0, 10).map(result => {
        const movie = preparedItems[result.index]
        const matches = result.matches || []
        const title = matches[0] ? highlight(matches[0], `<span class='highlight'>`, '</span>') : movie.title.text
        const description = matches[1] ? highlight(matches[1], `<span class='highlight'>`, '</span>') : movie.description.text
        return (
          <Card key={result.index}>
            <b>✰ {movie.rating}</b>
            <Typography 
              gutterBottom variant='h5' component='h2'
              dangerouslySetInnerHTML={{ __html: `${title} - ${movie.year}` }} 
            /> 
            <Typography 
              paragraph variant='body2' color='textSecondary' component='p'
              dangerouslySetInnerHTML={{ __html: description }} 
            />
            {movie.tags.actors.map(actor => (
              <Chip
                avatar={<Avatar>{actor.charAt(0)}</Avatar>}
                label={actor}
                key={actor}
              />
            ))}
            {movie.tags.genres.map(genre => (
              <Chip
                label={genre}
                variant='outlined'
                key={genre}
              />
            ))}
          </Card>
        )
      })}
    </div>
  </>)
}

export default Movies