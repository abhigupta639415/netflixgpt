import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesList from './GptMoviesList'
import { BG_URL } from '../utility/constant'

const GptSearch = () => {
  return (
    <div>
       
       <div className='absolute -z-20'>
        <img src={BG_URL} alt="Netflix Background"  />
        </div>

      <GptSearchBar />
      <GptMoviesList />
    </div>
  )
}

export default GptSearch