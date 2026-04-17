import React, { use } from 'react'
import { API_OPTIONS } from '../utility/constant'
import { useState,useEffect } from 'react';



const VideoBackground = ({ id }) => {
    const [tailerId, setTailerId] = useState() ;

    const getMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const response = await data.json() ;
        console.log(response) ;

        const filterData = response.results.find( (item) => item.type === "Trailer") ;
        const tailer = filterData?filterData : response.results[0] ;
        setTailerId(tailer.key) ;
    } ;
    useEffect(() => {
        getMovie() ;
    }, []) ;

  return (
    <div>
        <iframe className='w-screen aspect-video object-cover'
            // src={`https://www.youtube.com/embed/${tailerId}`} 
            src={`https://www.youtube.com/embed/${tailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${tailerId}`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // FrameBorder="0"
            allowFullScreen>    
        </iframe>
    </div>
  )
}

export default VideoBackground