import React from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../constants/API_options'
import { useEffect } from 'react'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = ({movieId}) => {
    const dispatch=useDispatch()
   
  //fetch trailer video & updating the store with triler video data
  const getMovieVideos=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US", API_options)
    const json=await data.json()
  

    const filterData=json.results.filter(video=>video.type==="Trailer")
    // filter data is 0 then take 1st array of json.results else take filterdata[0]
    const trailer=filterData.length?filterData[0]:json.results[0]
    dispatch(addTrailerVideo(trailer))
  }
 useEffect(()=>{
  getMovieVideos()
 },[])
}

export default useMovieTrailer