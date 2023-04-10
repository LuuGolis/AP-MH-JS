
const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            fecha: '',
            eventos: [],
            eventosBackUp: [],
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
                    this.eventosBackUp = this.eventos

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
/*
        filtroTexto(){
            this.eventos = this.eventosBackUp.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase())
            || evento.description.toLowerCase().includes(this.texto.toLowerCase()))
        },
        filtroCategoria(){
            if(this.categoriaSeleccionada.length>0){
                this.eventos = this.eventosBackUp.filter(evento => this.categoriaSeleccionada.
                    includes(evento.category))
            }
            else{
                this.eventos = this.eventosBackUp
            }

        },*/

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
