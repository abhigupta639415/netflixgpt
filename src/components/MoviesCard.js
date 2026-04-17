import React from 'react'
import MoviesList from './MoviesList'
import { IMG_CDN_URL } from '../utility/constant'

const MoviesCard = ({ poster_path }) => {
  return (
    <div className='w-64 h-96 rounded-lg overflow-hidden px-4'>
        <img src={IMG_CDN_URL + poster_path} alt="movie-poster" />
    </div>
  )
}

export default MoviesCard