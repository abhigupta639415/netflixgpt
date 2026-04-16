import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaymovies'

const Browse = () => {
  
  useNowPlayingMovies() ;

  return (
    <Header/>
  )
}

export default Browse