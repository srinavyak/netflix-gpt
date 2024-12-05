import { useDispatch ,useSelector} from "react-redux"
import { useEffect } from "react"
import {addPopularMovies  } from "../utils/moviesSlice"
import { API_options } from "../constants/API_options"

const usePopularMovies=()=>{
    //  Fetch data from tmdb api & update the store,lets crete a new hook and extrach all this logic there
    const dispatch=useDispatch()
    const PopularMovies=useSelector(store=>store.movies.PopularMovies)
    const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_options)
    const json= await data.json()
    // console.log(json.results,"pop")
    dispatch(addPopularMovies(json.results))
    }
    
    useEffect(()=>{
      !PopularMovies &&  getPopularMovies()
        },[])
   
}

export default usePopularMovies;