// Temporarily held here
// Will be made into a Redux action

import axios from 'axios'

const imdb = {}

imdb.getShows = async q => {
  return await axios.get(
    `https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_IMDB_API_KEY}/${q}`
  )
}

export default imdb
