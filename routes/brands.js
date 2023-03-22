const express = require("express");
const brandsRouter = express.Router();
const connection=require("../model/db")

const {createbrands,getallbrands, deleteBrand,updatedBrands} = require("../controller/brands");
brandsRouter.post("/", createbrands)
brandsRouter.get("/",getallbrands)
brandsRouter.delete("/:id",deleteBrand)
brandsRouter.put("/:id",updatedBrands)
module.exports = brandsRouter;
