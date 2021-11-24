const express = require("express")

const ventaRoutes = express.Router()

ventaRoutes.get("/", (req,res)=>{
    res.render("pages/venta")
})

module.exports = ventaRoutes