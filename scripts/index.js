const contenedorTarjetas = document.querySelector('#contenedorCards')

let tarjetasCreadas = crearTarjetas(data.events)

contenedorTarjetas.innerHTML = tarjetasCreadas

function crearTarjetas(arrayDatos) {
    let tarjeta = ""
    let tarjetas = arrayDatos.forEach(event => {
        tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
    <img src="${event.image}" class="card-img-top" alt="cardImg" width="150" height="150">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$${event.price}</p>
        <a href="details.html" class="btn btn-dark" id="btn">See more</a>
    </div>
</div> `
    });
    return tarjeta
}

//Creación de categorías
function nombreCategorias(arrayDatos) {
    let category = arrayDatos.map((event) => event.category)
    let categorias = new Set(category)
    return categorias
}
const categorias = nombreCategorias(data.events)

function crearLblCategoria(categorias) {
    let lblCategoria = ''
    for (let categoria of categorias.values()) {
        lblCategoria +=
            `<label>
   ${categoria}
   <input type="checkbox" name="${categoria}" value="${categoria}">
</label>`
    }
    return lblCategoria
}
const contenedorCheckbox = document.querySelector('#contenedorFiltros')
let categoriasCreadas = crearLblCategoria(categorias) 
contenedorCheckbox.innerHTML =  categoriasCreadas 

//Filtrar tarjetas por nombre y descripcion del evento

let buscador = document.getElementById('buscador') //log correcto

buscador.addEventListener('keyup',()=>{
    let filtro = data.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()))
    let filtroNombre = crearTarjetas(filtro)
 
    contenedorTarjetas.innerHTML = filtroNombre
})

buscador.addEventListener('keyup',()=>{
    let filtro = data.events.filter((event) => event.description.toLowerCase().includes(buscador.value.toLowerCase()))
    let filtroD = crearTarjetas(filtro)
    contenedorTarjetas.innerHTML = filtroD
 
})


