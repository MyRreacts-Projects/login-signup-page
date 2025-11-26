import React from 'react'
import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    // navigation 
    const navigate = useNavigate()
    // handleOut function
    const handleOut = ()=>{
        signOut(auth)
        .then((res)=>{
            alert('log out successfully')
            navigate('/signup')
        })
        .catch((error)=>{console.log(error.code,error.message)})
    }
  return (
    <div>
        <h1>Welcome to Home page</h1>
        <h2>you are logged In</h2>
        <button onClick={handleOut}>log out</button>
    </div>
  )
}

export default Home;