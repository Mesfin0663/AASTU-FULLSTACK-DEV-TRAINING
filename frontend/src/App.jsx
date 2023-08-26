import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/users' element={<Users/>}/>

 </Routes>
</BrowserRouter>
    </>
  ) 
}

export default App
