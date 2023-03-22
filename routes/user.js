const express = require("express");
const userRouter = express.Router();
const connection=require('../model/db')
const {createuser, getcustomer,deleteUserById,updateUserById} =require("../controller/user")
userRouter.post("/",createuser);
userRouter.get("/",getcustomer)
userRouter.delete("/:id",deleteUserById)
userRouter.put("/:id",updateUserById)


module.exports = userRouter;
