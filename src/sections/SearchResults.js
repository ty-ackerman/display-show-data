import React, { useEffect } from 'react'
import imdb from '../utils/imdb'

export default function SearchResults () {
  useEffect(async () => {
    const dbShows = await imdb.queryDbForShow('community')
    // community id = tt1439629
    // const season1 = await imdb.getEpisodes('tt1439629', '4')
  }, [])
  return (
    <div>
      <h1>Search Results</h1>
      <div>This Works!!!</div>
    </div>
  )
}
