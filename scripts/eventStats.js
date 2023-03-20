let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const contenedorTarjetas = document.querySelector('#contenedorCards')
let eventos = []

const stats = document.getElementById('eventStats')
const upStats = document.getElementById('upEventsStats')
const pastStats = document.getElementById('pastEventsStats')

function traerDatos() {
    fetch(urlApi).then(response => response.json())
        .then(datosAPI => {
            eventos = datosAPI.events
            //ordenar de mayor asistencia a menor
           let eventosF = eventos.filter(event => event.date <= datosAPI.currentDate)
           let  e = ordenAsc(eventosF)
           let f = ordenDes(eventosF)
        console.log(e);
        console.log(f);
               dibujarTabla(e,stats)
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function filtrar(datos){
    const datosFiltrados = datos.filter(event => event.date <= eventos.currentDate)
    return console.log(datosFiltrados);
}
filtrar(eventos)

function ordenAsc(array){    
    const sorted = [...array].sort((a,b) => a.assistance - b.assistance)
    return  sorted.map(event => event.name)
}

function ordenDes(array){
     const sorted = [...array].sort((a,b) => b.assistance - a.assistance)
     return sorted.map(event => event.name)
}

function dibujarTabla(array, lugar){
    array.forEach(evento =>{
    let tbItem = document.createElement("tr")
    tbItem.innerHTML = evento

    lugar.appendChild(tbItem)
})
    /*let tableItem = ""
    let item = array.forEach(eventos =>{
        tableItem += `<tr>
        <td>${eventos.name}</td>
        <td>${eventos.name}</td>
      </tr>`})*/
      lugar.innerText = item
}
