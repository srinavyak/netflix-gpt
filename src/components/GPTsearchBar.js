import React from 'react'
import lang from '../constants/languageconstants'
import { useSelector } from 'react-redux'

const GPTsearchBar = () => {
    const language=useSelector((store)=>store.config.language)
    console.log(language)
  return (
    <div className='pt-[20%] flex justify-center '>
        <form className='w-1/2 bg-transparent grid grid-cols-12'>
            <input type='text' className='p-3 m-3 col-span-9' placeholder={lang[language].gptsearchPlaceholder} />
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-xl text-white rounded-lg'> {lang[language].search}</button>
           
        </form>
    </div>
  )
}

export default GPTsearchBar