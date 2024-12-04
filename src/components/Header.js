import React,{ useEffect }  from 'react'
import {onAuthStateChanged } from "firebase/auth";
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO_URL } from "../constants/Logo_URL";
import { toggleGptSearchView } from '../utils/gptSlice';
import { supportedLanguages } from '../constants/languageconstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const user=useSelector((store)=>store.user)
 const showGptsearch = useSelector(store=>store.gpt.showGptSearch)
  const handleSignout=()=>{   
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {email,uid} = user;
          dispatch(addUser({uid:uid,email:email}))
          navigate("/browse")
         
        } else {
          dispatch(removeUser())
          navigate("/")
         
        }
      });
      //unsubscribe when component ummounts
      return ()=> unsubscribe()
},[])

  const handleGptSearch=()=>{
    //toggle gpt search
    dispatch(toggleGptSearchView())

  }
  const handlelangChange=(e)=>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))

  }
 
  return (
    <div className=' flex absolute w-screen px-8 py-2 justify-between bg-gradient-to-b z-10 from-black'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO_URL} alt="logo"></img>
        
       {user && ( <div className='flex p-2 justify-between'>

        {showGptsearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handlelangChange}> 
          {supportedLanguages.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

        </select>)}
         <button onClick={handleGptSearch} className='my-2 px-2 mx-4 bg-purple-700 font-semibold text-white'>{showGptsearch?"Home":"GPT Search"}</button> 
          {/* <div className='hidden p-2 m-2 font-bold text-black'>{user?.email}</div> */}
          <button onClick={handleSignout} className=' text-white p-2 m-2 bg-red-600 font-bold '> Signout </button>
        </div>)} 

    </div>
  )
}

export default Header