import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
 const {movieNames,movieResults}=useSelector(store=>store.gptResult)
 //console.log(movieResults,"ress")
 if(!movieNames)return <h1>Movies not found..</h1>;

  return (
    <div className='p-4 m-4  bg-black bg-opacity-90'>
      <div>
        {movieNames.map((movieName,index)=>
           <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
     
      </div>
    </div>
  )
}

export default GPTMovieSuggestions