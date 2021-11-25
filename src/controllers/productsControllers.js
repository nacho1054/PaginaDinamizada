const getProducts = (req, res)=>{
    res.render(index)
}


const databaseConnection = require("../../config/database")

const getHomePage=(req,res)=>{
    res.render('pages/index.ejs')
};



const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM productosonlinetuning ",(error,data)=>{
        if(error){
            console.log(error)
        }else{
           console.log(data)
            res.render("pages/productos",{
                products:data
            })
        }
    })
    
};

const getProductsById = (req, res)=> {
    // res.send('Esto devuelve un solo producto')
    res.render('pages/detailsproduct')
};

const getForm = (req, res) =>{
    res.render('pages/addproducts')
};

const addNewProduct =(req,res)=>{
    const {nombre_producto,precio,stock,descripcion,imagen }= req.body
   
  databaseConnection.query("INSERT INTO productosonlinetuning (nombre_producto,precio,stock,descripcion,imagen)VALUES(?,?,?,?,?) ",[nombre_producto,parseFloat(precio),parseInt(stock),descripcion,imagen],(error,data)=>{
        if(error){
            console.log(error)
        }else{
    
           
            res.render("pages/index")
            console.log("Se agrego nuevo producto")
        }
    })
   
};

module.exports = {getAllProducts, getProductsById, getForm, addNewProduct, getHomePage, getProducts}