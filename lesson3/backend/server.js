const express = require('express');
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

app.listen(PORT, console.log(`Server started on port ${PORT}`))
