import React, { useEffect } from 'react'
import './App.css'
import Logo from './logo.png'
import Todos from './components/Todos'
import imdb from './utils/imdb'

function App () {
  useEffect(() => {
    const shows = imdb.getSavedShows()
    console.log(shows)
  }, [])

  return (
    <div className='App'>
      <img src={Logo} alt='' />
      <Todos />
    </div>
  )
}

export default App
