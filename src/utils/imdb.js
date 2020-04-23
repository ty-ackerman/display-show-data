// Temporarily held here
// Will be made into a Redux action

import axios from 'axios'

const imdb = {}

imdb.getShow = async q => {
  return await axios.get(
    `https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_IMDB_API_KEY}/${q}`
  )
}

imdb.getSavedShows = async show => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shows`)
}

export default imdb
