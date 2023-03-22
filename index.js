const express = require('express');
const app = express()
const port = 3306;

const createuser = require('./controller/user');
const cors =require("cors")

const connection= require('./model/db.js')
const userRouter =require("./routes/user")
const productRouter =require("./routes/product")
const cartRouter =require("./routes/cart")
const db=require("./model/db");
const orderRouter = require('./routes/order');
const reviewsRouter = require('./routes/reviews');
const couponsRouter = require('./routes/coupons');
const feedbackRouter = require('./routes/feedback');
const brandsRouter = require('./routes/brands');
const roleRouter = require('./routes/role');
const loginRouter = require("./routes/login")
const categoryRouter=require("./routes/category")
app.use(express.json())
app.use(cors())




// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello World')
})


app.use("/user", userRouter);
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.use("/order",orderRouter)
app.use("/reviews",reviewsRouter)
 app.use("/coupons",couponsRouter)
app.use("/feedback",feedbackRouter)
app.use("/brands", brandsRouter)
app.use("/role", roleRouter)
app.use("/login" , loginRouter)
app.use("/cat",categoryRouter )



app.listen(port , ()=> {
    console.log(`server listening to ${port}`)
  });