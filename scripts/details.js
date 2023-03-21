let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let eventos = []

const params = new URLSearchParams(document.location.search)
const id = params.get("_id")

const contenedor = document.getElementById("contenedorDetails")

function traerDatos() {
  fetch(urlApi).then(response => response.json())
    .then(datosAPI => {
      eventos = datosAPI.events
      let card = eventos.filter(event => event._id == id)

      let tarjeta = ""

      tarjeta += `<div class="card mt-4" id="detail">
                  <div class="row g-0">
                    <div class="col-sm-6 d-flex">
                      <img class="img-fluid rounded" src="${card[0].image}"  alt="eventImg">
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="card-body">
                        <h4 class="card-title text-center">${card[0].name}</h4>
                        <ul style="list-style: none;">
                          <li><b>Date: </b>${card[0].date} </li>
                          <li><b>Description: </b>${card[0].description}</li>
                          <li><b>Category: </b>${card[0].category}</li>
                          <li><b>Place: </b>${card[0].place}</li>
                          <li><b>Capacity: </b>${card[0].capacity}</li>
                          <li><b>Assistance or estimate: </b>${card[0].assistance || card[0].estimate}</li>
                          <li><b>Price: </b>$${card[0].price}</li>
                      </ul>
                      <a href="./index.html" id="btnDetails" class="btn btn-dark" >Atrás</a>
                      </div>
                    </div>
                  </div>
                </div>`
      contenedor.innerHTML = tarjeta
    })
    .catch(error => console.log(error.message))
}
traerDatos()
