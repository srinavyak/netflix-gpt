import React from 'react'
import { IMG_CDN_URL } from '../constants/Bg_img'

const MovieCard = ({posterPath}) => {
 if (posterPath)
  return (
    <div className='w-48 pr-4'>
        <img alt="movie card" src={IMG_CDN_URL+ posterPath } />
    </div>
  )
}

export default MovieCard