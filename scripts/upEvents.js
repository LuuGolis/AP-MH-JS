
const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            fecha: '',
            eventos: [],
            eventosBackUp: [],
            eventosFuturos:[],
            texto: '',
            categorias:[],
            categoriaSeleccionada:[],
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
                    this.eventosFuturos = this.eventos.filter(evento => evento.date > this.fecha)
                    this.eventosBackUp = this.eventosFuturos

                    this.extraerCategorias(this.eventos);
                })
                .catch(error => console.log(error.message))
        },
        extraerCategorias(array){
            array.forEach(elemento =>{
                if(!this.categorias.includes(elemento.category))
                this.categorias.push(elemento.category)
            })
            console.log(this.categorias);
        }

    },
    computed: {

        filtros() {
            let filtroTexto = this.eventosBackUp.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase())
            || evento.description.toLowerCase().includes(this.texto.toLowerCase()))
            if(this.categoriaSeleccionada.length>0){
                this.eventos = filtroTexto.filter(evento => this.categoriaSeleccionada.includes(evento.category))
            }else{
                this.eventos = filtroTexto
            }
        }
    },
}).mount('#app')



/*let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

const contenedorTarjetas = document.querySelector('#contenedorCards')
let eventos = []
let eventosFuturos = []

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
            eventosFuturos = eventos.filter(event => event.date > datosAPI.currentDate)
            crearTarjetas(eventosFuturos, contenedorTarjetas)

            //para filtrar por checkbox
            const categorias = nombreCategorias(eventosFuturos)
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

    const datosFiltrados = eventosFuturos.filter(({ category, name, description }) =>
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
¨*/