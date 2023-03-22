const express = require("express");
const feedbackRouter = express.Router();
const connection =require("../model/db")
const {createfeedback, getallfeedback, deleteFeedback,updateFeedback} = require("../controller/feedback")
feedbackRouter.post("/", createfeedback)
feedbackRouter.get("/",getallfeedback)
feedbackRouter.delete("/:id", deleteFeedback)
feedbackRouter.put("/:id",updateFeedback)


module.exports = feedbackRouter;
