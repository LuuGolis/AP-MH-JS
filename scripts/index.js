//let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

console.log(Vue);
const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            fecha: '',
            eventos: [],
            eventosBackUp: [],
            texto: '',
            mensaje: 'Hola desde VUE!',
        }
    },
    created() {
        this.traerDatos()

    },
    mounted() {

    },
    methods: {
        traerDatos() {
            fetch(this.urlApi)
                .then(response => response.json())
                .then(datos => {
                    this.eventos = datos.events
                    this.fecha = datos.currentDate
                    this.eventosBackUp = this.eventos
                    console.log(this.fecha);
                    console.log(datos)
                    console.log(this.eventos);
                })
                .catch(error => console.log(error.message))
        }

    },
    computed: {
        filtros() {


            /* const checkedValues = [...check]
                 .filter(input => input.checked)
                 .map(input => input.value);
         */
            this.eventos = this.eventosBackUp.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase())
            || evento.description.toLowerCase().includes(this.texto.toLowerCase()))
                   /* || eventos.description.toLowerCase().includes(this.texto.toLowerCase())) && (checkedValues.length == 0
                        || checkedValues.includes(category)));*/
        /*
            if (datosFiltrados.length > 0) {
                crearTarjetas(datosFiltrados, contenedorTarjetas)
            }
            else {
                contenedorTarjetas.innerHTML = "Oooops! La búsqueda no arrojó resultados :("
            }*/
        }
    },
}).mount('#app')
/*
const contenedorTarjetas = document.querySelector('#contenedorCards')
let eventos = []
let tarjetasFiltradas

let buscador = document.getElementById('buscador')
let contenedorCheckbox = document.querySelector('#contenedorFiltros')

let check

contenedorCheckbox.addEventListener('change', filtros);
buscador.addEventListener('keyup', filtros)

function traerDatos() {
    //fetch('./data.json)
    fetch(urlApi)
    .then(response => response.json())
        .then(datosAPI => {
            eventos = datosAPI.events
            crearTarjetas(eventos, contenedorTarjetas)

            //para filtrar por checkbox
            const categorias = nombreCategorias(eventos)
            contenedorCheckbox.innerHTML = dibujarCheckboxs(categorias)
            check = document.querySelectorAll('input[type=checkbox]')
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function crearTarjetas(arrayDatos, lugar) {
    let tarjeta = ""
    let tarjetas = arrayDatos.forEach(eventos => {
        tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
    <img src="${eventos.image}" class="card-img-top" alt="cardImg" width="150" height="150">
    <div class="card-body">
        <h5 class="card-title">${eventos.name}</h5>
        <p class="card-text">${eventos.description}</p>
        <p>$${eventos.price}</p>
        <a href="./details.html?_id=${eventos._id}" class="btn btn-dark" >See more</a>
    </div>
</div> `
    });
    lugar.innerHTML = tarjeta
}

function dibujarCheckboxs(arrayDatos) {
    let checkBox = ''
    for (let categoria of arrayDatos.values()) {
        checkBox +=
            `<label id="myCheck">
   ${categoria}
   <input type="checkbox"  name="categoria" value="${categoria}">
</label>`
    }
    return checkBox
}

function nombreCategorias(arrayDatos) {
    let category = arrayDatos.map((event) => event.category)
    let categorias = new Set(category)
    return categorias
}

function filtros() {
    let valorBuscador = buscador.value.toLowerCase()

    const checkedValues = [...check]
        .filter(input => input.checked)
        .map(input => input.value);

    const datosFiltrados = eventos.filter(({ category, name, description }) =>
        (name.toLowerCase().includes(valorBuscador)
            || description.toLowerCase().includes(valorBuscador)) && (checkedValues.length == 0
                || checkedValues.includes(category)));

    if (datosFiltrados.length > 0) {
        crearTarjetas(datosFiltrados, contenedorTarjetas)
    }
    else {
        contenedorTarjetas.innerHTML = "Oooops! La búsqueda no arrojó resultados :("
    }
}
*/