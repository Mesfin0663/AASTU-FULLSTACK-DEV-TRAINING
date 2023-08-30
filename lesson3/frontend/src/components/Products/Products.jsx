import React, { useContext, useEffect, useState } from 'react'
import './products.css'
import axios from "axios";
import { AuthContext } from '../../contexts/AllContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
function Products() {
    const [productList, setProductList]= useState()
    const [loading, setLoading]= useState(true)

    const { cart, setCart } = useContext(AuthContext)
    const notify = () => toast("Wow so easy!");

  console.log("initial cart: ",cart)
    useEffect(()=>{
        axios
        .get("http://localhost:8080/product/all-products").then((response) => {
           console.log(response.data)
           setProductList(response.data)
           setLoading(false);
          });
    },[])

    function addToMYCart(product){
      //  console.log("func",id,name)
    let newCart=[];
        
          if(cart.length ===0){
            newCart = [product]
            console.log("newCArt0",newCart)
            setCart(newCart)
            localStorage.setItem("carts",JSON.stringify(newCart))
          }else{
            newCart = [...cart,product]
            console.log("newCart",newCart)
          setCart(newCart);
          localStorage.setItem("carts",JSON.stringify(newCart))

          } 
        
         console.log(cart)
    }
   
   
    return (
        <div className='product_container'>
          {
            loading?<>
            <h1>Loading</h1>
            </>:<div className='product_wrapper'>
             {
            productList.map((product)=>(
                <div className='prduct_card' key={product.id}>
                                  <img className='product_img' src={product.image} alt="" />

                <h1 className='product_title'>{product.name}</h1>
                {/* <p className='product_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis animi autem eligendi consectetur, accusamus explicabo odio dignissimos laudantium. Corrupti?</p> */}
                 <p>Price: {product.price}</p>
                 
                 {
                      cart.findIndex((cartItem)=>cartItem.id ==product.id)==-1?<>
                      <button className='add_to_cart' onClick={()=>addToMYCart(product)}> <div><ShoppingCartIcon/>AddToCart</div> </button>

                      </>:<>
                      <button className='add_to_cart'  disabled> <div><ShoppingCartIcon/>OnCart</div> </button>

                      </>

                 }
            </div>

            ))
           }
            </div>
          }
                        <ToastContainer /> {/* <- add line */}

        </div>
    )
}

export default Products
