import React from 'react'
import MoviesList from './MoviesList'
import { IMG_CDN_URL } from '../utility/constant'

const MoviesCard = ({ poster_path }) => {
  if(!poster_path) return null ;
  return (
    <div className='w-64 h-96 rounded-lg overflow-hidden px-4 border border-border/20 cursor-pointer
    transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:scale-[1.10] hover:shadow-lg hover:border-border/40 hover:z-10 hover:relative'>
        <img src={IMG_CDN_URL + poster_path} alt="movie-poster" />
    </div>
  )
}

export default MoviesCard