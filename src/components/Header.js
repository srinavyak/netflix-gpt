import React,{ useEffect }  from 'react'
import {onAuthStateChanged } from "firebase/auth";
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO_URL } from "../constants/Logo_URL";

const Header = () => {
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const user=useSelector((store)=>store.user)

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
  return (
    <div className=' flex absolute w-screen px-8 py-2 justify-between bg-gradient-to-b from-black z-10'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO_URL} alt="logo"></img>
        
       {user && ( <div className='flex p-4 m-4 justify-between'>
          <div className='hidden p-2 m-2 font-bold text-black'>{user?.email}</div>
          <button onClick={handleSignout} className='m-2 p-2 text-black bg-red-600 font-bold '> Signout </button>
        </div>)} 

    </div>
  )
}

export default Header