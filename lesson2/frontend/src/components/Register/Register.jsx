import React, { useState } from 'react'
import './register.css'
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleNameChange = (e)=>{
      e.preventDefault()
      console.log(e.target.value);
      setName(e.target.value)
    }
    const handleEmailChange = (e)=>{
        e.preventDefault()
        console.log(e.target.value);
        setEmail(e.target.value)
      }
    
    const handleSubmit = async()=>{
        console.log(name)
        console.log(email)
        
        axios
        .post("http://localhost:8080/register", {
          name: "Mesfin",
          email: "mesfingirmatwo@gmail.com"
        }).then((response) => {
           console.log(response.data)
          });
    }
  return (
    <div className='register_container'>
        <div className='register_wrapper'>
           <h1 className='register_title'>Register</h1>
           <div className='register_fields'>
            <div className='field'>
            <label htmlFor="name" className='label'>Enter Your Name: </label>
           <input className='input_filed' type="text" id='name' onChange={handleNameChange} placeholder='Name' />
            </div>
         
            <div className='field'>
            <label htmlFor="name" className='label'>Enter Your email:</label>
           <input className='input_filed' type="email" id='email' onChange={handleEmailChange} placeholder='email' />
            </div>
            <div className='field'>
            <label htmlFor="password" className='label'>Enter Your Passowrd: </label>
           <input className='input_filed' type="password" id='password' placeholder='password' />
            </div>
      
            <div className='field'>
            <label htmlFor="password" className='label'>Enter Your Passowrd: </label>
           <input className='input_filed' type="password" id='password' placeholder='password' />
            </div>

             <input type="submit" value="Register" onClick={handleSubmit} />
           </div>
        </div>
     
    </div>
  )
}

export default Register
