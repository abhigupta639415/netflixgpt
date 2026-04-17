import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaymovies'
import MainComponent from './MainComponent';
import SeconderyCom from './SeconderyCom';

const Browse = () => {

  useNowPlayingMovies() ;

  return (
    <div>
      <Header/>
      <MainComponent/>
      <SeconderyCom/>
    </div>
  )
}

export default Browse