import { request } from "../service/request.js";

const crearTarjeta = ( link, cat, nombre, precio, id ) => {
    const tarjeta = document.createElement('li')
    const contenido = `
        <img src="/assets/img/iconos/delete_black_24dp (1) 1.png" alt="delete" class="delete__icon">
        <img src="/assets/img/iconos/edit_black_24dp 1.png" alt="edit" class="edit__icon">

        <img src="${link}" alt="" class="cards__img">
        <p class="cards__titulo-producto">${nombre}</p>
        <p class="cards__precio">${precio}</p>
        <h3 class="cards__subtitulo-producto">Ver producto</h3>`;

    const categoriaElegida = cat;

    tarjeta.innerHTML = contenido;
    const btn = tarjeta.querySelector(".delete__icon");
    btn.addEventListener("click", () => {
        const id = btn.id;
        request.eliminarProducto(id).then(response => {
            console.log(response);
        }).catch(error => alert("Hubo un error"));
    });
    return tarjeta;
}

const ulStarWars = document.querySelector("#Star-Wars")
const ulConsolas = document.querySelector("#Consolas")
const ulCelulares = document.querySelector("#Celulares")

request.listaProductos()
    .then((response) => {
        response.forEach(({link, cat, nombre, precio, id}) => {
            const nuevaTarjeta = crearTarjeta(link, cat, nombre, precio, id);
            if(cat === ulStarWars){
                ulStarWars.appendChild(nuevaTarjeta)
            } if(cat === ulCelulares) {
                ulCelulares.appendChild(nuevaTarjeta)
            } else {
                ulConsolas.appendChild(nuevaTarjeta)
            }
        });
    })
    .catch((error) => alert('Ocurrio un error'));

console.log("Conexion exitosa")