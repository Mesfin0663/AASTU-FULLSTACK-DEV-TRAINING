const express = require('express');
const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors())

const port = 8080;

const products = [
    {
          id: 1,
          name: "product1",
          catagory: "catagory1",
          image: ""
    },
    {
        id: 2,
        name: "product2",
        catagory: "catagory2",
        image: ""
    }
]
const catagory = [
  {
        id: 1,
        catagoryName: "shoes",
        image: ""
  },
  {
      id: 2,
      catagoryName: "cloth",
      image: ""

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
