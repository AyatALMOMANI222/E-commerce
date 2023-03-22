const express = require("express");
const couponsRouter = express.Router();
const connection=require("../model/db")
const {createcoupons,deleteCoupons,updateCouponsById} =require("../controller/coupons")
couponsRouter.post("/", createcoupons)
couponsRouter.delete("/:id",deleteCoupons)
couponsRouter.put("/:id",updateCouponsById)

module.exports = couponsRouter;
