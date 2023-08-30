const express = require('express')
const router = express.Router()

const products = [
  {
    id: 1,
    name: "ARIAT",
    catagoryId: "Shoes",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/91lIXQ7iCcL._AC_UY695_.jpg"
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
    name: "WOLVERINE",
    catagory: "Shoes",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/81loLb-NTYL._AC_UX695_.jpg"
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

  router.get("/all-products",(req,res)=>{
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