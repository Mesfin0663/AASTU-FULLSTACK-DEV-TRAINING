import React, { useEffect, useState } from 'react'
import './products.css'
import axios from "axios";

function Products() {
    const [productList, setProductList]= useState()
    const [loading, setLoading]= useState(true)

    // const productList = [
    //     {
    //           id: 1,
    //           name: "Nike Air Max 270 Men's Shoes",
    //           catagoryId: "Shoes",
    //           price:1200,
    //           image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41e147d8-6410-4b75-b46c-567b0d5903ca/air-max-270-mens-shoes-KkLcGR.png"
    //     },
    //     {
    //       id: 2,
    //       name: "Men's Short Sleeve Shirt",
    //       catagory: "cloth",
    //       price:1500,
    //       image: "https://m.media-amazon.com/images/I/71ZiB2HQbWL._AC_SY879._SX._UX._SY._UY_.jpg"
    //   },
    //     {
    //         id: 3,
    //         name: "Nike Air Max 95 Men's Shoes",
    //         catagory: "Shoes",
    //         price:1500,
    //         image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f411a3ec-39b7-490e-b2c8-335264adb054/air-max-95-shoes-CwsxnW.png"
    //     },
    //     {
    //       id: 4,
    //       name: "Women's Shoes",
    //       catagory: "Shoes",
    //       price:1500,
    //       image: "https://m.media-amazon.com/images/I/51FMSSQjt0S._AC_UX679_.jpg"
    //   },
    //   {
    //     id: 5,
    //     name: "Women Short Sleeve Summer Midi Dress",
    //     catagory: "Cloth",
    //     price:1500,
    //     image: "https://images.meesho.com/images/products/271743407/43qlw_512.webp"
    // }
    // ];

    useEffect(()=>{
        axios
        .get("http://localhost:8080/products").then((response) => {
           console.log(response.data)
           setProductList(response.data)
           setLoading(false);
          });
    },[])
    return (
        <div className='product_container'>
          {
            loading?<>
            <h1>Loading</h1>
            </>:<div className='product_wrapper'>
             {
            productList.map((product)=>(
                <div className='prduct_card' key={product.id}>
                <h1>{product.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis animi autem eligendi consectetur, accusamus explicabo odio dignissimos laudantium. Corrupti?</p>
                <img className='product_img' src={product.image} alt="" />
            </div>

            ))
           }
            </div>
          }
           
        </div>
    )
}

export default Products
