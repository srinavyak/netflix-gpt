import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies,"mmm")
  return (
    <div className='p-2'>
        <h1 className='text-3xl font-bold  text-white py-2'>{title}</h1>
        <div className='flex overflow-x-scroll  ' >
        <div className='flex'>      
        {movies?.map((movie)=>( 
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
        </div>
       
    </div>
  )
}

export default MovieList