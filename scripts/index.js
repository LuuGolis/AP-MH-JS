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
        <a href="details.html" class="btn btn-dark" id="btn">See more</a>
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
let allCheckbox = document.querySelectorAll('input[name=categoria]:checked')

console.log(allCheckbox);
console.log(crearCheckbox.value);
console.log(check);
console.log(typeof(check));
console.log(Object.keys(check));
check.forEach(c => console.log(c.checked))
check.forEach(c => console.log(c.value))
let value = []
check.forEach(c => c.addEventListener('change', (e)=>{
    
    if(c.checked == true){
        value.push(c.value) 
      //  value.filter(() => check.checked == true)
    }else{
        value.splice(e.target.value)
    }

    console.log(value)
    console.log(value.length)
}))

/* Esto anda perfecto solo que si aplicas buscador te muestra todas las cards
y solo se aplica un elemento al array
check.forEach(c => c.addEventListener('click', ()=>{
    let value = []
    if(c.checked == true){
        value.push(c.value) 
    } /*else{
        value.pop(c.value)
    }
    let filtro = data.events.filter((event) => event.category == value)
    let filtroCategoria = crearTarjetas(filtro)
    console.log(filtro);
    contenedorTarjetas.innerHTML = filtroCategoria
    console.log(value)
    console.log(value.length)
    console.log(typeof(value));
}))
*/
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

let buscador = document.getElementById('buscador') //log correcto

buscador.addEventListener('keyup', () => {
    let filtro = data.events.filter((event) => event.name.toLowerCase().includes(buscador.value.toLowerCase()))
    let filtroNombre = crearTarjetas(filtro)

    contenedorTarjetas.innerHTML = filtroNombre
})

buscador.addEventListener('keyup', () => {
    let filtro = data.events.filter((event) => event.description.toLowerCase().includes(buscador.value.toLowerCase()))
    let filtroD = crearTarjetas(filtro)

    contenedorTarjetas.innerHTML = filtroD

})


