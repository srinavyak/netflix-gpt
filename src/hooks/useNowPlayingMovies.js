import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { API_options } from "../constants/API_options"

const useNowPlayingMovies=()=>{
    //  Fetch data from tmdb api & update the store,lets crete a new hook and extrach all this logic there
    const dispatch=useDispatch()

    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
    
    const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',API_options)
    const json= await data.json()
    dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies()
        },[])
   
}

export default useNowPlayingMovies;