const contenedorTarjetas = document.querySelector('#contenedorCards')

let tarjetasCreadas = crearTarjetas(data.events)

contenedorTarjetas.innerHTML = tarjetasCreadas

function crearTarjetas(arrayDatos){
    let tarjeta = ""
    let tarjetas = arrayDatos.forEach(event => {tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
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

/*
console.log(Object.keys(data))
console.log(Object.keys(data.events))
console.log(data.events)
console.log(data.events[1])
console.log(Object.values(data.events));
*/
const contenedorFiltros = document.querySelector('#contenedorFiltros')

function nombreCategorias(arrayDatos){
let category = arrayDatos.map((event) => event.category)
categorias = new Set(category)
return categorias
}
categorias = nombreCategorias(data.events)
console.log(categorias);
