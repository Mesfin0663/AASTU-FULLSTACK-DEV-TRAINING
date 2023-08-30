import React, { useContext, useState } from 'react'
import './login.css'
import axios from "axios";
import { AuthContext } from '../../contexts/AllContext';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


function Register() {
    const [loading,setLoading]= useState(false)
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {authUser,setAuthUser} = useContext(AuthContext)

  
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
    
   
    const handleSubmit = async()=>{
      setLoading(true);
        if( !email || !password){
            alert("Please Enter all fields")
            console.log("abort Registration")
            return ;
        }

    
        console.log(email)
     await   axios
        .post("http://localhost:8080/user/login", {
          email: email,
          password: password
        }).then((response) => {
           console.log(response.data)
           setAuthUser(response.data.user)
           localStorage.setItem('user', JSON.stringify(response.data.user));
           setLoading(false)
           navigate("/products")
          }).catch(error => {
            console.log(error);
            setLoading(false)
            alert(error.message)
          })
          console.log("end of Login")
    }
  return (
    <div className='register_container'>
        <div className='register_wrapper'>
           <h1 className='register_title'>Login</h1>
           <div className='register_fields'>
         
            <div className='field'>
            <label htmlFor="name" className='label'>Enter Your email:</label>
           <input className='input_filed' type="email" id='email' onChange={handleEmailChange} placeholder='email' />
            </div>
            <div className='field'>
            <label htmlFor="password" className='label'>Enter Your Passowrd: </label>
           <input className='input_filed' type="password" id='password' onChange={handlePasswordChange} placeholder='password' />
            </div>
      
            <button onClick={handleSubmit} className='submit_button'>{loading?<CircularProgress/>:"Login"}</button>
             {/* <input type="submit" value={loading?<CircularProgress/>:"Login"} onClick={handleSubmit} /> */}
           </div>
        </div>
     
    </div>
  )
}

export default Register
