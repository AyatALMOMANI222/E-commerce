const express = require("express");
const categoryRouter = express.Router();
const connection=require("../model/db")
const {createCategory,deleteCategory ,getCategory,updateCategory }=require("../controller/category")
categoryRouter.post("/", createCategory)
categoryRouter.delete("/:id",deleteCategory)
categoryRouter.get("/", getCategory)
categoryRouter.put("/:id",updateCategory)
module.exports = categoryRouter;
