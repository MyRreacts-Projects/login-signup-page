// login.jsx 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Login = ()=>{
    // values getting state
    const [values,setValues] = useState({
        email :'',
        password : ''
    })
    // errorMessage state 
    const [errorMessage,setErrorMessage] = useState('')
    // handleSubmission 
    const handleSubmission = async ()=>{
        console.log(values.email);
        console.log(values.password)
        if(!values.email || !values.password){
            setErrorMessage('Fill all fields');
            return
        }
        setErrorMessage('');
        try{await signInWithEmailAndPassword(auth,values.email,values.password);
            // navigat home or etc
        }
        catch(error){
            console.log(error.code,error.message)
        }
    }
    return(
        <>
        <div className="container">
            <div className="subcontainer">
                <h1>Login Form</h1>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="Enter your email address"
                    onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }/>

                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Enter your Password"
                     onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          } />
                </div>
                <div>{errorMessage}</div>
                <div><button onClick={handleSubmission}>Login</button></div>
                <div><p>Already Have an Account?<span><Link to='/signup'>Sign Up</Link></span></p></div>
            </div>
        </div>
        </>
    )
}
export default Login;