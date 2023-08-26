import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'> 
      <a href="/">Logo</a>
        <div className='nav_links'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Product</a></li>
            <li><a href="/users">Users</a></li>
          </ul>
        </div>
     </div>

  )
}

export default Navbar
