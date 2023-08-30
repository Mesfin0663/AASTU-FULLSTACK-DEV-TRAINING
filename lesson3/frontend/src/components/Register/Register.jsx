import React, { useContext, useState } from 'react'
import './register.css'
import axios from "axios";
import { AuthContext } from '../../contexts/AllContext';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading,setLoading]= useState(false)

    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {authUser,setAuthUser} = useContext(AuthContext)

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
    const handlePasswordChange = (e)=>{
        e.preventDefault()
        console.log(e.target.value);
        setPassword(e.target.value)
      }
    
      const handleConfirmPasswordChange = (e)=>{
        e.preventDefault()
        console.log(e.target.value);
        setConfirmPassword(e.target.value)
      }
    const handleSubmit = async()=>{
      setLoading(true)
        if(!name || !email || !password){
            alert("Please Enter all fields")
            console.log("abort Registration")
            return ;
        }

        if(password !== confirmPassword){
            alert("Password did not match")
            console.log("abort Registration")
            return ;
        }
        console.log(name)
        console.log(email)
        axios
        .post("http://localhost:8080/user/register", {
          username: name,
          email: email,
          password: password
        }).then((response) => {
           console.log(response.data)
           setLoading(false)
          //  alert("You have registered")
           
             navigate('/login')
          }).catch(error => {
            console.log(error);
            setLoading(false)

            alert(error.message)
          })
          console.log("end of register")
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
           <input className='input_filed' type="password" id='password' onChange={handlePasswordChange} placeholder='password' />
            </div>
      
            <div className='field'>
            <label htmlFor="password" className='label'>Enter Your Passowrd: </label>
           <input className='input_filed' type="password" id='password' onChange={handleConfirmPasswordChange} placeholder='password' />
            </div>

            <button onClick={handleSubmit} className='submit_button'>{loading?<CircularProgress/>:"Register"}</button>
           </div>
        </div>
     
    </div>
  )
}

export default Register
