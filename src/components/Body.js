import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utility/firebase.js' ;
import { useDispatch } from 'react-redux';
import { addUser , removeUser } from '../utility/userSlice.js' ;


const Body = () => {
  
  const dispatch = useDispatch() ;

  const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/browse',
        element: <Browse/>
      }
  ])

  useEffect(() => {
    // Check if the user is authenticated
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName} = user ;
    dispatch(addUser({uid, email, displayName})) ;
   
  } else {
    dispatch(removeUser()) ;
   
  }
}, []);


  })

  return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
  )
}

export default Body