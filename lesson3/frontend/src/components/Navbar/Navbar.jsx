import React, { useContext } from 'react'
import './navbar.css'
import loginStatus from '../../loginStatus'
import { AuthContext } from '../../contexts/AllContext'
import { Link, useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
function Navbar() {
  const { authUser, setAuthUser ,cart,setCart} = useContext(AuthContext)
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem("carts")
    setAuthUser(null);
    setCart(null)
    navigate('/')

  }
  return (
    <section className='container'>
      <nav className='navbar'>
        <a className='nav_logo' href="/">Habesha-Store</a>
        <div>
          <ul>
            <li><a className='nav_link' href="/">Home</a></li>
            {
              authUser ?
                <>
                  <li><Link className='nav_link' to="/products">Products</Link></li>
                  {/* <li><a className='nav_link' href="/catagories">Categories</a></li> */}
                  <li><Link to="/cart-list" className='nav_link' ><Badge badgeContent={cart?.length} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge></Link></li>
                  <li><Link to="/profile" className='nav_link' ><PersonIcon />{authUser.username}</Link></li>

                  <li><a className='nav_link' onClick={logOut}><PowerSettingsNewIcon />LogOut</a></li>


                </> : <>
                  <li><a className='nav_link' href="/products">Products</a></li>
                  <li><Link to="/cart-list" className='nav_link' ><Badge badgeContent={cart?.length} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge></Link></li>

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
