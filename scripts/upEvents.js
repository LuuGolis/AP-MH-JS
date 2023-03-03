let eventosFiltrados = data.events.filter(event => event.date > data.currentDate )
function tarjetasFuturas(arrayDatos){
    let tarjeta = ""
    let eventosFiltrados = arrayDatos.filter(event => event.date > data.currentDate )
    crearTarjetas(arrayDatos)
    /*let tarjetasFiltradas = arrayDatos.forEach(event => {tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
    <img src="${event.image}" class="card-img-top" alt="cardImg" width="150" height="150">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$${event.price}</p>
        <a href="details.html" class="btn btn-dark" id="btn">See more</a>
    </div>
</div> `    
    });*/
    return tarjeta
}
let eventoFuturo = tarjetasFuturas(eventosFiltrados)
console.log(eventosFiltrados);
console.log(eventoFuturo);