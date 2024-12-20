import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  // if (!movies)return;

  
    return (
      movies && (
    <div className="bg-black">
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      </div>
      {/* 
      movielist-popular
        - moviecards*n
      movielist-Nowplying
      movielist-trending

      
      */}

    </div>
  ))
}

export default SecondaryContainer