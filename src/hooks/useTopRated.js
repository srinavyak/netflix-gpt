import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { API_options } from '../constants/API_options'

const useTopRated = () => {
    const dispatch=useDispatch()
 

    const getTopRated=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_options)
    const json= await data.json()
    console.log(json.results,"top")
    dispatch(addTopRatedMovies(json.results))
    }
    
    useEffect(()=>{
        getTopRated()
        },[])
  
}

export default useTopRated