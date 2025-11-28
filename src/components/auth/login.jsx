// login.jsx 
import  '../../styles/login.css';
import React, { useState } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebase/firebase";


const Login = ()=>{
    // values getting state
    const [values,setValues] = useState({
        email :'',
        password : ''
    })
    // errorMessage state 
    const [errorMessage,setErrorMessage] = useState('');
    // navigate if login successfully 
    const navigate = useNavigate()
    // handleSubmission 
    const handleSubmission = async ()=>{
        console.log(values.email);
        console.log(values.password)
        if(!values.email || !values.password){
            alert('Fill all input Fields')
          
            return
        }
        setErrorMessage('');
        try{await signInWithEmailAndPassword(auth,values.email,values.password);
             alert('login successfully')
             navigate('/home')
            
            // navigat home or etc

            // clear input  fields 
            setValues({
                email : '',
                password : ''
            })
        }
        catch(error){
            console.log(error.code,error.message)
            
            alert('Plz sign up first and use correct email and password')
            navigate('/signup')
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
                    required
                    value={values.email}
                    onChange={(e) =>
            setValues(
             {...values, email: e.target.value}
           )
          }/>

                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Enter your Password"
                    required
                    value={values.password}
                     onChange={(e) =>
            setValues(
                {...values , password: e.target.value}
          )
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