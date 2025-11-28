// signup page 
// login.jsx 
import '../../styles/signup.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../firebase/firebase";
import { Navigate } from "react-router-dom";
import { doc,setDoc } from 'firebase/firestore';
const SignUp = ()=>{
    // values getting state
    const [values,setValues] = useState({
        name : '',
        email :'',
        password : ''
    })
    // errorMessage state 
    const [errorMessage,setErrorMessage] = useState('')
    // navigate 
    const navigate = useNavigate()
    // handleSubmission 
    const handleSubmission = async ()=>{
        console.log(values.email);
        console.log(values.password);
        console.log(values.name)
        if(!values.name ||!values.email || !values.password){
            setErrorMessage('Fill all fields');
            return
        }
        setErrorMessage('');
        try{
            // create user in auth
            const res = await createUserWithEmailAndPassword(auth,values.email,values.password);
            // create uid and stroe extra data in firestore
            
            const user = res.user;
           
            const uid = user.uid;
         

            await setDoc(doc(db,'users',uid),{
                name : values.name,
                email : values.email,
                createdAt : new Date()

            })

            
           
            alert('sign up successfully')
           
            // navigat home or etc
            navigate('/')
            // clear all input fields 
            setValues({
                name :'',
                email : '',
                password: ''
            })
        }
        catch(error){
            console.log(error.code,error.message)
            alert('Enter valid email and password for signup')
        }
       
    }
    return(
        <>
        <div className="container">
            <div className="subcontainer">
                <h1>Sign Up Page</h1>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="name" placeholder="Enter your name"
                    value={values.name}
                    onChange={(e) =>
            setValues({...values,name: e.target.value}
             
            )
          }/>

                </div>
                 <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="Enter your email address"
                    value={values.email}
                    onChange={(e) =>
            setValues(
                {...values,email: e.target.value}
              )
          }/>

                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Enter your Password"
                    value={values.password}
                     onChange={(e) =>
            setValues(
                {...values,password : e.target.value}
        )
          } />
                </div>
                <div>{errorMessage}</div>
                <div><button onClick={handleSubmission}>SignUp</button></div>
                <div><p>Already Have an Account?<span><Link to='/'>LogIn</Link></span></p></div>
            </div>
        </div>
        </>
    )
}
export default SignUp;



