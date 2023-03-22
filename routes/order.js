const express = require("express");
const orderRouter = express.Router();
const connection =require("../model/db")
const {createorder,getorders,deleteOrderByid,updateOrderById} =require("../controller/orders")
orderRouter.post("/", createorder)
orderRouter.get("/",getorders)
orderRouter.delete("/:id",deleteOrderByid)
orderRouter.put("/:id",updateOrderById)

module.exports = orderRouter;
