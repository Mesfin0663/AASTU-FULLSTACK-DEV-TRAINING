import React from 'react'
import './products.css'
function Products() {
    const productList=[
        {
           id:1,
           name:"aaa"
        },
        {
            id:2,
            name:"bb"
        },
        {
            id:3,
            name:"cc"
        },
    ]
    return (
        <div className='product_container'>
           {
            productList.map((product)=>(
                <div className='prduct_card' >
                <h1>{product.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis animi autem eligendi consectetur, accusamus explicabo odio dignissimos laudantium. Corrupti?</p>
                <img className='product_img' src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>

            ))
           }
           
        </div>
    )
}

export default Products
