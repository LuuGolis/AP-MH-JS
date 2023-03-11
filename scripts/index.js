console.log([document]);
const contenedorTarjetas = document.querySelector('#contenedorCards')

let tarjetasCreadas = crearTarjetas(data.events)

contenedorTarjetas.innerHTML = tarjetasCreadas

function crearTarjetas(arrayDatos) {
    let tarjeta = ""
    let tarjetas = arrayDatos.forEach(event => {
        tarjeta += `<div class="card" style="width: 18rem; height:25rem;">
    <img src="${event.image}" class="card-img-top" alt="cardImg" width="150" height="150">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$${event.price}</p>
        <a href="./details.html?_id=${event._id}" class="btn btn-dark" >See more</a>
    </div>
</div> `
    });
    return tarjeta
}

//Creación de categorías
const categorias = nombreCategorias(data.events)

let contenedorCheckbox = document.querySelector('#contenedorFiltros')

let crearCheckbox = dibujarCheckboxs(categorias)
contenedorCheckbox.innerHTML = crearCheckbox
let check = document.querySelectorAll('input[type=checkbox]')

contenedorCheckbox.addEventListener('change', () => {
    const checkedValues = [...check]
        .filter(input => input.checked)
        .map(input => input.value);
    const categoriasFiltradas = data.events.filter(({ category }) => checkedValues.includes(category));
    console.log(categoriasFiltradas);
    contenedorTarjetas.innerHTML = crearTarjetas(categoriasFiltradas)
});

function dibujarCheckboxs(arrayDatos) {
    let checkBox = ''
    for (let categoria of categorias.values()) {
        checkBox +=
            `<label>
   ${categoria}
   <input type="checkbox" name="categoria" id="n" value="${categoria}">
</label>`
    }
    return checkBox
}
function nombreCategorias(arrayDatos) {
    let category = arrayDatos.map((event) => event.category)
    let categorias = new Set(category)
    return categorias
}

//Filtrar tarjetas por nombre y descripcion del evento

let buscador = document.getElementById('buscador')

let searchInput = search(data.events, buscador)

contenedorTarjetas.innerHTML = searchInput

function search(arrayDatos, buscador) {
    buscador.addEventListener('keyup', () => {
        let filtroN = arrayDatos.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()))
        let filtroD = arrayDatos.filter((event) => event.description.toLowerCase().includes(buscador.value.toLowerCase()))
        let filtro = crearTarjetas(filtroN) || crearTarjetas(filtroD)

        contenedorTarjetas.innerHTML = filtro
    })
    return filtro
}
