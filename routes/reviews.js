const express = require("express");
const reviewsRouter = express.Router();
const connection=require("../model/db")
const {createreviews,getallreviews,deleteReviewsById ,updateReview} =require("../controller/Reviews")
reviewsRouter.post("/", createreviews)
reviewsRouter.get("/",getallreviews)
reviewsRouter.delete("/:id",deleteReviewsById)
reviewsRouter.put("/:id" ,updateReview )
module.exports = reviewsRouter;
