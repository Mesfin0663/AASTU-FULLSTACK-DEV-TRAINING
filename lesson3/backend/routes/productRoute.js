const express = require('express')
const router = express.Router()

const products = [
    {
      id: 1,
      name: "Nike Air Max 270 Men's Shoes",
      catagoryId: "Shoes",
      price: 1200,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41e147d8-6410-4b75-b46c-567b0d5903ca/air-max-270-mens-shoes-KkLcGR.png"
    },
    {
      id: 2,
      name: "Men's Short Sleeve Shirt",
      catagory: "cloth",
      price: 1500,
      image: "https://m.media-amazon.com/images/I/71ZiB2HQbWL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      id: 3,
      name: "Nike Air Max 95 Men's Shoes",
      catagory: "Shoes",
      price: 1500,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f411a3ec-39b7-490e-b2c8-335264adb054/air-max-95-shoes-CwsxnW.png"
    },
    {
      id: 4,
      name: "Women's Shoes",
      catagory: "Shoes",
      price: 1500,
      image: "https://m.media-amazon.com/images/I/51FMSSQjt0S._AC_UX679_.jpg"
    },
    {
      id: 5,
      name: "Women Short Sleeve Summer Midi Dress",
      catagory: "Cloth",
      price: 1500,
      image: "https://images.meesho.com/images/products/271743407/43qlw_512.webp"
    }
  ]
  
  router.get("/products",(req,res)=>{
    res.send(products);
  })
  router.put('/update/:id', (req, res) => {
    console.log("update End point reached")
   let productId = req.params.id
   let newPrice = req.body.price
   let productIndex = products.findIndex((obj )=> obj.id == productId);
  
    if (productIndex == -1) {
      res.status(400).json({ message: "Error occured! product not found" })
  
    } else {
      products[productIndex].price = newPrice;
    
      res.status(200).json({ message: "success product updated !" })
    }
  
  });

  router.delete('/delete/:id', (req, res) => {
    console.log("delete End point reached")
  
    objIndex = products.findIndex((obj => obj.id == req.params.id));
    console.log(objIndex)
    if (objIndex == -1) {
      res.status(404).json({ message: "Error occured! product not found" })
  
    } else {
  
      products.splice(objIndex, 1);
      res.status(200).json({ message: "success product deleted !" })
    }
    // let user =  req.body;
  
  });

  module.exports = router