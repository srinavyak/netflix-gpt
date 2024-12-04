import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
 const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
 console.log(showGptSearch,"BGPt")
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
 
  return (
    <div> 
      <Header/> 
     
     {showGptSearch ? (<GPTSearch/>):(<> <MainContainer/>
      <SecondaryContainer/></>)} 
    {/* 
    Main Container
      - videobackground
      - video Title
    SecondaryContainer
      - MovieList*n
        - cards*n 
    */}

    


    </div>
   
  )
}

export default Browse