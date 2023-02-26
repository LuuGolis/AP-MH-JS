const contenedorCard = document.querySelector('#contenedorCard')

let tarjetaCreada = crearTarjeta(data.events)

contenedorCard.innerHTML = tarjetaCreada

function crearTarjeta(arrayDatos){
    let tarjeta = ''
    for(const event of arrayDatos){
        tarjeta += `<div class="card mt-4" >
        <div class="row g-0">
          <div class="col d-flex">
            <img class="img-fluid rounded" src="${event.image}" alt="eventImg">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <ul style="list-style: none;">
                <li>Date:${event.date} </li>
                <li>Description:${event.description}</li>
                <li>Category:${event.category}</li>
                <li>Place:${event.place}</li>
                <li>Capacity:${event.capacity}</li>
                <li>Assistance or estimate:${event.assistance}</li>
                <li>Price:${event.price}</li>
            </ul>
            </div>
          </div>
        </div>
      </div>`
    }
    return tarjeta
}