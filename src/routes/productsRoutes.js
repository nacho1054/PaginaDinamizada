const express = require("express")
const {getAllProducts} = require("../controllers/productsControllers")

const productsRoutes = express.Router()

productsRoutes.get("/", getAllProducts)

module.exports = productsRoutes