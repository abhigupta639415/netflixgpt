import React from 'react'
import Header from './Header'
import { useState , useRef} from 'react'
import { checkValidation } from './validate.js'
import {signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utility/firebase.js' ;
import { useNavigate } from 'react-router-dom';
import { BG_URL } from '../utility/constant.js';

const Login = () => {
  const navigate = useNavigate() ;

  const [IsSignedIn , setIsSignedIn] = useState(true) ;
  const email = useRef(null);
  const password = useRef(null) ;
  const [errorMessage, setErrorMessage] = useState("") ;

  const handleButtomClick = () => {
    // validate the form data
    const message = checkValidation(email.current.value, password.current.value) ;
    setErrorMessage(message) ;
    if(message) return ;
    // if validation is successful, perform login or signup logic here
    if(!IsSignedIn){
      // perform signup logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user) ;
    navigate('/browse') ;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage) ;
    // ..
  });

    }
    else{
      // perform login logic here
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browse') ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage) ;
  });

    }


  }
  const toggleSignIn = ()=> {
    setIsSignedIn(!IsSignedIn) ;
  }
  return (
    <div>

        <Header />

        <div className='absolute'>
        <img src= {BG_URL } alt="Netflix Background"  />
        </div>

        <div>
          <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black p-12 w-4/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg">
            <h1 className='text-3xl font-bold mb-4'>{IsSignedIn?"Sign In":"Sign Up"}</h1>
            {!IsSignedIn && <input  className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Full Name'></input>}
            <input ref={email} className='p-4 my-4 w-full bg-gray-600' type="email" placeholder='Email Address'/>
            <input ref={password} className='p-4 my-4 w-full bg-gray-600' type="password" placeholder='Password'/>
            <p className='text-red-500 text-lg'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full hover:bg-red-800 rounded-xl' onClick={handleButtomClick}>{IsSignedIn?"Login":"Sign Up"}</button>
            <p className='p-2 my-4' onClick={toggleSignIn}>{IsSignedIn?"New to ABHI-FLIX?":"Already have an account?"} <span className='text-blue-500 cursor-pointer'> {IsSignedIn?"Sign up now":"Log in now"}</span></p>
          </form>
        </div>

    </div>
  )
}

export default Login