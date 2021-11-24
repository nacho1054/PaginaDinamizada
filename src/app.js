const express = require("express")
const path = require("path")
const databaseConnection = require("../config/database")
const mailRoutes = require("./routes/mailRoutes")
const productsRoutes = require("./routes/productsRoutes")
const homeRoutes = require("./routes/homeRoutes")
const registerRoutes = require("./routes/registerRoutes")
const ventaRoutes = require("./routes/ventaRoutes")


// Inicializar express
const app = express()

// Conectarnos a la DB
databaseConnection.connect()

// Configurations
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".ejs")

// Routes
app.use("/products", productsRoutes)
app.use("/home", homeRoutes)
app.use("/sendMail",mailRoutes)
app.use("/register",registerRoutes)
app.use("/venta",ventaRoutes)
app.use(express.static(path.join(__dirname,'public')));


app.listen(5000, ()=>{
    console.log("servidor corriendo en puerto 5000")
})