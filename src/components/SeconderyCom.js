import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SeconderyCom = () => {
const movies = useSelector((state) => state.movies) ;

  return (
    <div className='bg-black'>
       <div className='-mt-40 relative z-20'>
        <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
         <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
          <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
           <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
            <MoviesList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
       </div>
    </div>
  )
}

export default SeconderyCom