import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'

import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
 
  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div> 
      <Header/> 
      <MainContainer/>
      <SecondaryContainer/>
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