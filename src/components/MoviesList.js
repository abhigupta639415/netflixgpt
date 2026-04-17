import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({ title, movies }) => {
    console.log(movies) ;
     if (!movies) return <p>Loading...</p>;
  return (
    <div>
         <h1 className='text-3xl  mb-2  px-5 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-3 py-2'>
                {movies.map( (movie) =>(<MoviesCard key={movie.id} poster_path={movie?.poster_path} />))}
            </div>
        </div> 
    </div>
  )
}

export default MoviesList