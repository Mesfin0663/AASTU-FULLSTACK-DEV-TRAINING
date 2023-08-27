const express = require('express');
const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors())

const port = 8080;

const products = [
    {
          id: 1,
          name: "Nike Air Max 270 Men's Shoes",
          catagoryId: "Shoes",
          price:1200,
          image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41e147d8-6410-4b75-b46c-567b0d5903ca/air-max-270-mens-shoes-KkLcGR.png"
    },
    {
      id: 2,
      name: "Men's Short Sleeve Shirt",
      catagory: "cloth",
      price:1500,
      image: "https://m.media-amazon.com/images/I/71ZiB2HQbWL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
    {
        id: 3,
        name: "Nike Air Max 95 Men's Shoes",
        catagory: "Shoes",
        price:1500,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f411a3ec-39b7-490e-b2c8-335264adb054/air-max-95-shoes-CwsxnW.png"
    },
    {
      id: 4,
      name: "Women's Shoes",
      catagory: "Shoes",
      price:1500,
      image: "https://m.media-amazon.com/images/I/51FMSSQjt0S._AC_UX679_.jpg"
  },
  {
    id: 5,
    name: "Women Short Sleeve Summer Midi Dress",
    catagory: "Cloth",
    price:1500,
    image: "https://images.meesho.com/images/products/271743407/43qlw_512.webp"
}
]

app.get('/', (req, res) => {
    res.send('hello from backend')
  })

  app.get('/products', (req, res) => {
    res.send(products);
  })
  app.post('/register', (req, res) => {
    console.log("Register End point reached")
    console.log(req.body)
    res.status(200).json({message:"success"})
  })
//   app.listen(port, console.log(`server running on port ${port}`));
app.listen(8080,console.log("my server started on port 8080"))
