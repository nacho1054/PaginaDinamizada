console.log("productos")
const products = [{
    imageUrl:"../galeria productos/faros led - 1.jpg",
    title:"Faros led",
    description:"Faros de LED. Varios modelos.",
    price:1050
},
{
    imageUrl:"../galeria productos/cubre caliper - 1.jpg",
    title:"Cubre caliper",
    description:"Juego de cubre caliper color rojo logo Brembo.",
    price:1800
}]


const renderProducts = ()=> {
    const grid = document.getElementsByClassName("grillaProductos")[0]
    products.forEach(element => {
        const article = document.createElement("article")
        article.classList.add("producto__columna")

        const image = document.createElement("img")
        image.classList.add("fotoProducto")
        image.src= element.imageUrl

        const title = document.createElement("h4")
        title.classList.add("tituloProducto")
        title.innerHTML= element.title

        const descripcion = document.createElement("p")
        descripcion.classList.add("descripcion")
        descripcion.innerHTML= element.description

        const precio = document.createElement("p")
        precio.classList.add("precio")
        precio.innerHTML= "$"+ element.price

        article.appendChild(image)
        article.appendChild(title)
        article.appendChild(descripcion)
        article.appendChild(precio)

        grid.appendChild(article)
    });
}

renderProducts()