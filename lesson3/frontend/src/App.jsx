import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import loginStatus from './loginStatus'
import Register from './components/Register/Register'
import { AuthContext, AuthProvider } from './contexts/AllContext'
import CartList from './components/CartList/CartList'
import Profile from './components/Profile/Profile'
function App() {
  const [count, setCount] = useState(0)
  const {authUser,setAuthUser,setCart} = useContext(AuthContext)
  
  useEffect(()=>{
     setAuthUser(JSON.parse(localStorage.getItem('user')))
     let carts = JSON.parse(localStorage.getItem("carts"))
     if(carts){
      setCart(carts)
     }
  },[])
  // const logedIn = false;
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <p>{authUser?.name}</p>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart-list' element={<CartList />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />

          <Route path='/register' element={authUser?<Products/>:<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
