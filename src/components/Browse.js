import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaymovies'
import MainComponent from './MainComponent';
import SeconderyCom from './SeconderyCom';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearch = useSelector((state) => state.gpt?.ShowgptSearch) ;
  useNowPlayingMovies() ;

  return (
    <div>
      <Header/>
      {gptSearch ? <GptSearch/> : 
      <><MainComponent/>
      <SeconderyCom/></> }  
    </div>
  )
}

export default Browse