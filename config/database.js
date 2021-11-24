const mysql2 = require("mysql2")

const databaseConnection = mysql2.createConnection(
{
    host : "localhost",
    user : "root",
    database : "basedatos"
})

databaseConnection.connect((error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("servidor conectado a mysql")
    }
})

module.exports = databaseConnection