const express = require("express");
const roleRouter = express.Router();
const connection=require("../model/db")
const createRole =require("../controller/role")
roleRouter.post("/", createRole)

module.exports = roleRouter;