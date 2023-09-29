import { request } from "../service/request.js";

const crearTarjeta = ( link, categoria, nombre, precio, id ) => {
    const tarjeta = document.createElement('li')
    const contenido = `
        <img src="${link}" alt="" class="cards__img">
        <p class="cards__titulo-producto">${nombre}</p>
        <p class="cards__precio">${precio}</p>
        <h3 class="cards__subtitulo-producto">Ver producto</h3>`;

    tarjeta.innerHTML = contenido;
    return tarjeta;
}

const ulStarWars = document.querySelector("[data-star]");
const ulConsolas = document.querySelector("[data-con]");
const ulCelulares = document.querySelector("[data-cel]");

request.listaProductos()
.then((response) => {
    if (Array.isArray(response)) {
        response.forEach(({link, categoria, nombre, precio, id}) => {
            console.log("categorias: ", categoria)
            const nuevaTarjeta = crearTarjeta(link, categoria, nombre, precio, id);
            nuevaTarjeta.classList.add('cards');
            if (categoria === "Star-Wars") {
                ulStarWars.appendChild(nuevaTarjeta);
            } else if (categoria === "Celulares") {
                ulCelulares.appendChild(nuevaTarjeta);
            } else {
                ulConsolas.appendChild(nuevaTarjeta);
            }
        });
    } else {
        // La respuesta no es un arreglo válido
        alert('La respuesta del servidor no es válida');
    }
})
.catch((error) => alert('Ocurrió un error con esta función'));

console.log("Conexion exitosa")