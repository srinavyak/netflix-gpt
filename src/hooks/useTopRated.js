import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { API_options } from '../constants/API_options'

const useTopRated = () => {
    const dispatch=useDispatch()
    
    const topRatedMovies=useSelector(store=>store.movies.topRatedMovies)

    const getTopRated=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_options)
    const json= await data.json()
    console.log(json.results,"top")
    dispatch(addTopRatedMovies(json.results))
    }
    
    useEffect(()=>{
     !topRatedMovies &&   getTopRated()
        },[])
  
}

export default useTopRated