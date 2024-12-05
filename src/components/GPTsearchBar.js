import React, { useRef } from 'react'
import lang from '../constants/languageconstants'
import { useDispatch, useSelector } from 'react-redux'
// import openaikey from '../utils/openAI'
import genAI from '../utils/GapiKey'
import { API_options } from '../constants/API_options'
import { addGptMovieResult } from '../utils/gptMovieResultSlice';

const GPTsearchBar = () => {
    const language=useSelector((store)=>store.config.language)
    const dispatch=useDispatch()
    const SearchText=useRef(null)

//search movie in tmdb database
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_options)
        const json= await data.json();
        return json.results;   
    }

    const handleGPTSearchClick=async()=>{
        console.log(SearchText.current.value)

        // make api call to gpt api and get movie results
        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query "
        + SearchText.current.value + 
        ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Gadar, stree, sholay, F3, kithakithalu";
       
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = gptQuery;
        const result = await model.generateContent(prompt);
        const response = result.response;
        // console.log(response)
        const text = response.text();
        // console.log(text)

        if(!text) return null;

        const gptMovies=text.split(",")
        // console.log(gptMovies)
       
        //for each movie i will search tmdb api
        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
        // [it returns 5 promises :Promise1,Pr2,pr3,pr4,pr5]
        // get data from promise array only if all are resolved
        const tmdbResults= await Promise.all(promiseArray);
        // console.log(tmdbResults,"p")
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))








        // const gptResults = await openaikey.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery}],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptResults)
        //   console.log(gptResults.choices)
        }


  return (
    <div className='pt-[20%] flex justify-center '>
        <form className='w-1/2 bg-transparent grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={SearchText} type='text' className='p-3 m-3 col-span-9' placeholder={lang[language].gptsearchPlaceholder} />
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-xl text-white rounded-lg' onClick={handleGPTSearchClick}> {lang[language].search}</button>
           
        </form>
    </div>
  )
}

export default GPTsearchBar