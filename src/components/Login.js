import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { BG_URL } from "../constants/Bg_img";
import {auth} from "../utils/firebase"

const Login = () => {
  const [issignIn, setIssignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);

  const handlebuttonclick = () => {
    const msg = validate(email.current.value, password.current.value);
    seterrorMessage(msg);
    console.log(email.current.value, password.current.value)
    if(msg) return;

    if(!issignIn){

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            seterrorMessage(errorMessage)
        });

    }
    else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorMessage)
            });

         }
    


  };

  const SignUp = () => {
    setIssignIn(!issignIn);
  };
  return (
    <div>
      <div className="absolute ">
        <Header />
        <img
          src={BG_URL}
          alt="bgimg"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 p-12 m-12 bg-black  text-white justify-center my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <p className="text-red-500 mx-6 font-bold">{errorMessage}</p>
        <h1 className="font-bold text-3xl py-4">
          {issignIn ? "Sign In" : "Sign UP"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full  bg-gray-700"
        />
        {!issignIn && (
          <input
            ref={confirmpassword}
            type="password"
            placeholder="Re-Enter Password"
            className="p-2 m-2 w-full  bg-gray-700"
          />
        )}
        <button
          className="p-2 m-2 w-full text-md bg-red-600"
          onClick={handlebuttonclick}
        >
          {issignIn ? "Sign In" : "Sign UP"}
        </button>
        <h1 className="mx-2 p-2 text-gray">
          {issignIn ? "New User" : "Already a User"}{" "}
          <Link
            className="underline hover:text-blue-800 font-bold"
            onClick={SignUp}
          >
            {issignIn ? "Sign Up" : "Sign In"}
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Login;
