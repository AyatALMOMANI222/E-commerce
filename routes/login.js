const express = require("express");
const loginRouter = express.Router();
const connection=require("../model/db")

const login = require("../controller/login")


loginRouter.post("/", login)


module.exports = loginRouter