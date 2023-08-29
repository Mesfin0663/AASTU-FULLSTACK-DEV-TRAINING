const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors())

const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
  res.send('hello from backend')
})


app.use("/product",require("./routes/productRoute.js"))
app.use("/user",require("./routes/userRoute.js"))

const connectDb = async ()=>{
  try{
      await mongoose.connect(process.env.MONGO_DB_URL)

  }catch(err){
    console.log(err);
  }
}

connectDb()

mongoose.connection.once('open',()=>{
  console.log('Connected to mongodb')
  app.listen(PORT, console.log(`Server started on port ${PORT}`))

})
mongoose.connection.on('error',err=>{
  console.log('Monogodb eror')
  console.log(err)
})