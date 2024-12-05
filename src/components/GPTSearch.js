import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../constants/Bg_img'

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10 opacity-75">
        <img 
          src={BG_URL}
          alt="bgimg"
        ></img>
      </div >
      <div >
     <GPTsearchBar/>
     <GPTMovieSuggestions/>
        {/* gpt search bar
        gpt movie suggestions */}
        </div>
    </div>
  )
}

export default GPTSearch