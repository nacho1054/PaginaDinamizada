const express = require("express")

const registerRoutes = express.Router()

registerRoutes.get("/", (req,res)=>{
    res.render("pages/register")
})

module.exports = registerRoutes