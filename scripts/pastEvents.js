const contenedorPastTarjetas = document.querySelector('#contenedorPastCards')

let eventosPasados = data.events.filter(event => event.date < data.currentDate)
let tarjetasPastCreadas = crearTarjetas(eventosPasados)

contenedorPastTarjetas.innerHTML = tarjetasPastCreadas
