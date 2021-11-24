const express = require("express")
const mailRoutes = express.Router()
const sendAnEmail = require("../controllers/emailController")

mailRoutes.get("/",sendAnEmail);

module.exports = mailRoutes