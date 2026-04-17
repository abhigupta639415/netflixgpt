import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainComponent = () => {
    const movies = useSelector((state) => state.movies?.addNowPlayingMovies) ;
    if(!movies)return ;
    const mainMovie = movies[0] ;
    console.log(mainMovie) ;
    const {title, overview, id} = mainMovie ;

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainComponent