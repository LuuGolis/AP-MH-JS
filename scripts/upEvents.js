
const contenedorTarjetas = document.querySelector('#contenedorCards')

let eventosFuturos = data.events.filter(event => event.date > data.currentDate)
let tarjetasCreadas = crearTarjetas(eventosFuturos)

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
        <a href="./details.html?_id=${event._id}" class="btn btn-dark" id="btn">See more</a>
    </div>
</div> `
    });
    return tarjeta
}


//Filtros checkbox - buscador

const categorias = nombreCategorias(data.events)

let contenedorCheckbox = document.querySelector('#contenedorFiltros')

let crearCheckbox = dibujarCheckboxs(categorias)
contenedorCheckbox.innerHTML = crearCheckbox
let check = document.querySelectorAll('input[type=checkbox]')

let buscador = document.getElementById('buscador')
contenedorCheckbox.addEventListener('change', filtroCategoria);
buscador.addEventListener('keyup', filtroCategoria)

function filtroCategoria() {
    let valorBuscador = buscador.value.toLowerCase()
    const checkedValues = [...check]
        .filter(input => input.checked)
        .map(input => input.value);
    const categoriasFiltradas = eventosFuturos.filter(({ category, name, description }) =>
        (name.toLowerCase().includes(valorBuscador)
            || description.toLowerCase().includes(valorBuscador)) && (checkedValues.length == 0
                || checkedValues.includes(category)));

    if (categoriasFiltradas.length > 0) {
        contenedorTarjetas.innerHTML = crearTarjetas(categoriasFiltradas)
    }
    else {
        contenedorTarjetas.innerHTML = "Oooops! La búsqueda no arrojó resultados :("
    }
}

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
