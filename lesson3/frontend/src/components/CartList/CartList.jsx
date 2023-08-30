import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AllContext'
import './cartList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
function CartList() {
    const { cart, setCart } = useContext(AuthContext)

  return (
    <div className="cart-list-container">
      <h1>List Of products in your cart</h1>
      {
        cart.map((item)=>(

             <div className='cart_item'>

             {/* <p className='cart_item_id'>{item.id}</p> */}
             <img className='cart_item_image' src={item.image} alt="" />

             <p className='cart_item_name'>{item.name}</p>

             <IconButton><DeleteIcon/></IconButton>
           </div>
        ))
      }
    </div>
  )
}

export default CartList
