
const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            fecha: '',
            eventos: [],
            eventosBackUp: [],
            arrPast: [],
            arrFuture:[],
            tabla1:[],
            tablaPast:[],
            tablaFuture:[],


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

                    this.arrFuture = this.futureEvents(this.eventos, this.fecha)
                    this.arrPast = this.pastEvents(this.eventos, this.fecha)

                    this.tabla1 = this.results(this.assistance(this.eventos),
                    this.assistance(this.eventos).reverse(),
                    this.capacity(this.eventos))

                    this.tablaPast = this.dataTable(this.arrPast)
                    this.tablaFuture = this.dataTable(this.arrFuture)


                })
                .catch(error => console.log(error.message))
        },
        futureEvents(array, date) {
            return array.filter(event => event.date > date)
        },
        pastEvents(array, date) {
            return array.filter(event => event.date < date)
        },
        assistance(array) {
            const percentage = array.map(event => {
                return {
                    attendance: (event.assistance / event.capacity) * 100,
                    nameEvent: event.name
                }
            })
            percentage.sort((a, b) => b.attendance - a.attendance)

            return percentage
        },
        capacity(arr) {
            const arrCapacity = arr.map(event => {
                return {
                    capacity: event.capacity,
                    nameEvent: event.name
                }
            })
            arrCapacity.sort((a, b) => b.capacity - a.capacity)

            return arrCapacity
        },
        results(highestPercentage, lowestPercentage, largerCapacity) {
            let all = {
                highestPercentage: highestPercentage[0].nameEvent,
                lowestPercentage: lowestPercentage[0].nameEvent,
                largerCapacity: largerCapacity[0].nameEvent
            }
            return all
        },
        
        dataTable(array) {
            let categories = Array.from(new Set(array.map(a => a.category)))
        
            let eventCategories = categories.map(category =>
                array.filter(event => event.category == category))
        
            let result = eventCategories.map(eventCat => {
                let calculate = eventCat.reduce((acc, event) => {
                    acc.category = event.category;
                    acc.revenues += event.price * (event.assistance || event.estimate);
                    acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
                    return acc
                },
                    {
                        category: "",
                        revenues: 0,
                        attendance: 0
                    })
                calculate.attendance = calculate.attendance / eventCat.length
                return calculate
            })
            return result
        
        },
    },
    
    computed: {

    },
}).mount('#app')
