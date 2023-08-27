import React from 'react'
import './navbar.css'
import loginStatus from '../../loginStatus'
function Navbar() {
  return (
    <section className='container'>
        <nav className='navbar'> 
              <a className='nav_logo' href="/">Habesha-Store</a>
                <div>
                  <ul>
                    <li><a  className='nav_link' href="/">Home</a></li>
                    {
                      loginStatus?
                      <>
                       <li><a className='nav_link' href="/products">Products</a></li>
                    <li><a className='nav_link' href="/catagories">Categories</a></li>
                    <li><p className='nav_link'>LogOut</p></li>

                      
                      </>:<>
                      <li><a className='nav_link' href="/products">Products</a></li>

                    <li><a className='nav_link' href="/register">Register</a></li>
                    <li><a className='nav_link' href="/login">Login</a></li>

                      </>
                    }
                   
                  </ul>
                </div>
            </nav>
    </section>
   

  )
}

export default Navbar
