const express = require("express");
const cartRouter = express.Router();
const connection=require('../model/db')
const {createcart, deleteCart,updateCartById} =require("../controller/cart")
cartRouter.post("/", createcart)
// cartRouter.get("/",getcartbyuserid)
cartRouter.delete("/:id",deleteCart)
cartRouter.put("/:id",updateCartById)

module.exports = cartRouter;
