const express = require("express");
const productRouter = express.Router();
const connection=require('../model/db')
const {createproduct} =require("../controller/product")
const{getallproduct,deleteProductById,updateProduct} =require("../controller/product")
productRouter.post("/",createproduct);
productRouter.get("/",getallproduct);
productRouter.delete("/:id",deleteProductById)
productRouter.put("/:id", updateProduct)



module.exports = productRouter;
