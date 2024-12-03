import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies)return<h1>Loading...</h1>; //to remove error i.e at first movies is null so it will return
    const mainMovie=movies[0]; //think 1st movie as main movie
    // console.log(mainMovie)

    const {original_title,overview,id}=mainMovie
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>

    </div>
  )
}

export default MainContainer