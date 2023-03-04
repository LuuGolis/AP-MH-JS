const contenedorUpTarjetas = document.querySelector('#contenedorUpCards')

let eventosFuturos = data.events.filter(event => event.date > data.currentDate)
let tarjetasUpCreadas = crearTarjetas(eventosFuturos)

contenedorUpTarjetas.innerHTML = tarjetasUpCreadas
/*
function crearTarjetasUp(arrayDatos){
    let tarjeta = ""
    arrayDatos.filter(event => event.date > data.currentDate).forEach(event => {tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
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
}*/
