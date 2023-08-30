const express = require('express');
const asyncHandler = require('express-async-handler')
const Users = require('../models/Users');

const router = express.Router()

const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@gmail.com",
      password: "123456"
    },
    {
      id: 2,
      username: "user2",
      email: "user2@gmail.com",
      password: "123456"
    }
  ]


router.post('/register', asyncHandler(async(req, res) => {
  console.log("Register End point reached")
  let user = req.body;
   let password = req.body.password;
   if(password.length<6){
    res.status(400).send({message:"Error password length less than 6"})
   }
   user.roles= ["buyer"]
  const userfromdb = await Users.create(user)
  
  if(userfromdb){
      console.log("user created on db")
      console.log(userfromdb)
      res.status(200).json({ message: "success" })

  }else{
    console.log("user not created on db")
    res.status(400).json({ message: "success" })

  }
}));

  
  router.post('/login', asyncHandler(
   async (req, res) => {
      console.log("Login End point reached")
      let userEmail = req.body.email;
      let userPassword = req.body.password
      let user = await Users.findOne({
        email: userEmail
      })
       if(user){
        console.log("user Found", user)
        if(userPassword===user.password){
          res.status(200).json({ message: "Login success",user:{username:user.username,email:user.email,roles:user.roles} })
    
        }else{
          res.status(400).json({ message: "Error password doesn't match" })
    
        }
       }else{
        console.log("user not found")
        res.status(400).json({ message: "Error user not found" })
    
       }
     
    }
  ));
module.exports = router