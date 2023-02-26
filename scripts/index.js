const contenedorTarjetas = document.querySelector('#contenedorCards')

let tarjetasCreadas = crearTarjetas(data.events)

contenedorTarjetas.innerHTML = tarjetasCreadas

function crearTarjetas(arrayDatos){
    let tarjetas = ''
    for(const event of arrayDatos){
        tarjetas += `<div class="card" style="width: 15rem;">
        <img src="${event.image}" class="card-img-top" alt="cardImg" width="150" height="150">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p>$${event.price}</p>
            <a href="details.html" class="btn btn-dark">See more${event._id}</a>
        </div>
    </div> `
    }
    return tarjetas
}