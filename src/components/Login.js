import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


const Login = () => {
    const [issignIn ,setIssignIn]= useState(true);

    const SignUp=()=>{
     
        setIssignIn(!issignIn)

    }
  return (
    <div>
    <div className='absolute '>
       <Header/>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/US-en-20241125-TRIFECTA-perspective_b55c552e-27af-438c-9052-710e645cab6c_large.jpg" alt="bgimg"></img>
    </div>
    <form className='absolute w-1/4 p-12 m-12 bg-black justify-center my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{issignIn?"Sign In":"Sign UP"}</h1>
        <input type='text' placeholder='Email' className='p-2 m-2 w-full'/>
        <input type='password' placeholder='Password' className='p-2 m-2 w-full'/>
        {!issignIn && <input type='password' placeholder='Password' className='p-2 m-2 w-full'/>}
        <button className='p-2 m-2 w-full text-md bg-red-600 '>{issignIn?"Sign In":"Sign UP"}</button>
        <h1 className='mx-2 p-2 text-gray'>{issignIn?"New User":"Already a User"} <Link className='underline hover:text-blue-800 font-bold' onClick={SignUp}>{issignIn?"Sign Up":"Sign In"}</Link></h1>
    </form>
    </div>
  )
}

export default Login
