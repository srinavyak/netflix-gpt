import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../constants/Bg_img'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 opacity-75">
        <img
          src={BG_URL}
          alt="bgimg"
        ></img>
      </div>
     <GPTsearchBar/>
     <GPTMovieSuggestions/>
        {/* gpt search bar
        gpt movie suggestions */}
    </div>
  )
}

export default GPTSearch