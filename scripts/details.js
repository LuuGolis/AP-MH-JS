
const params = new URLSearchParams(document.location.search)
const id = params.get("_id")

let card = data.events.filter(event => event._id == id)

const contenedor = document.getElementById("contenedorDetails")

let tarjeta = ""

        tarjeta += `<div class="card mt-4">
        <div class="row g-0">
          <div class="col d-flex">
            <img class="img-fluid rounded" src="${card[0].image}"  alt="eventImg">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${card[0].name}</h5>
              <ul style="list-style: none;">
                <li>Date:${card[0].date} </li>
                <li>Description:${card[0].description}</li>
                <li>Category:${card[0].category}</li>
                <li>Place:${card[0].place}</li>
                <li>Capacity:${card[0].capacity}</li>
                <li>Assistance or estimate:${card[0].assistance}</li>
                <li>Price:${card[0].price}</li>
            </ul>
            <a href="./index.html" id="btnDetails" class="btn btn-dark" >Atrás</a>
            </div>
          </div>
        </div>
      </div>`

      contenedor.innerHTML = tarjeta