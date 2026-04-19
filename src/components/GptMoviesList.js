import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptMoviesList = () => {
  const gpt = useSelector((store)=>store.gpt);
  const {movieResults,movieName} = gpt ;
  if(!movieName) return null ;
  return (
    <div className='bg-black text-white p-6 mt-6 z-10 opacity-85'>
        {movieName.map((movieName,index)=>(
            <MoviesList 
            key={movieName}
            title={movieName}
             movies={movieResults[index]}/>
        ))}
      
    </div> 
  )
}

export default GptMoviesList