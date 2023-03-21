let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const contenedorTarjetas = document.querySelector('#contenedorCards')
let eventos = []

function traerDatos() {
    //fetch('./data.json)
    fetch(urlApi)
    .then(response => response.json())
        .then(datosAPI => {
            eventos = datosAPI.events
            arrayPast = pastEvents(eventos, datosAPI.currentDate)
            arrFuture = futureEvents(eventos, datosAPI.currentDate)

            printTable1(results(assistance(eventos), assistance(eventos).reverse(), capacity(eventos)), "eventStats")

            printTable(dataTable(arrFuture), "upEventsStats")
            printTable(dataTable(arrayPast), "pastEventsStats")
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function futureEvents(array, date) {
    return array.filter(event => event.date > date)
}

function pastEvents(array, date) {
    return array.filter(event => event.date < date)
}

function assistance(array) {
    const percentage = array.map(event => {
        return {
            attendance: (event.assistance / event.capacity) * 100,
            nameEvent: event.name
        }
    })
    percentage.sort((a, b) => b.attendance - a.attendance)
    //console.log(percentage)
    return percentage
}

function capacity(arr) {
    const arrCapacity = arr.map(event => {
        return {
            capacity: event.capacity,
            nameEvent: event.name
        }
    })
    arrCapacity.sort((a, b) => b.capacity - a.capacity)
   // console.log(arrCapacity)
    return arrCapacity
}

function results(highestPercentage, lowestPercentage, largerCapacity) {
    let all = {
        highestPercentage: highestPercentage[0].nameEvent,
        lowestPercentage: lowestPercentage[0].nameEvent,
        largerCapacity: largerCapacity[0].nameEvent
    }
    return all
}

function printTable1(results, container) {
    const table = document.getElementById(container)
    table.innerHTML = `
    <tr>
        <td>${results.highestPercentage}</td>
        <td>${results.lowestPercentage}</td>
        <td>${results.largerCapacity}</td>
    </tr>
    `
}

function dataTable(array) {
    let categories = Array.from(new Set(array.map(a => a.category)))
    //console.log(categories)

    let eventCategories = categories.map(category =>
        array.filter(event => event.category == category))
    //console.log(eventCategories);

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

}

function printTable(array, idTag) {
    const upcomingTable = document.getElementById(idTag)
    let html = array.map(events => {
        return `
        <tr>
                <td>${events.category}</td>
                <td>$${events.revenues}</td>
                <td>${events.attendance.toFixed(2)}%</td>
            </tr>
        `
    })
    upcomingTable.innerHTML = html.join("")
}
