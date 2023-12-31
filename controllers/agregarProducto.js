import { request } from "../service/request.js";

const crearTarjeta = ( link, categoria, nombre, precio, id ) => {
    const tarjeta = document.createElement('li')
    const contenido = `
        <img src="/assets/img/iconos/delete_black_24dp (1) 1.png" alt="delete" class="delete__icon" id="${id}">
        <img src="/assets/img/iconos/edit_black_24dp 1.png" alt="edit" class="edit__icon">

        <img src="${link}" alt="" class="cards__img">
        <p class="cards__titulo-producto">${nombre}</p>
        <p class="cards__precio">${precio}</p>
        <h3 class="cards__subtitulo-producto">Ver producto</h3>`;

    const categoriaElegida = categoria;

    tarjeta.innerHTML = contenido;
    const btn = tarjeta.querySelector(".delete__icon");
    btn.addEventListener("click", (e) => {
        const id = btn.id;
        request.eliminarProducto(id).then(response => {
            console.log(response);
        }).catch(error => alert("Hubo un error"));
    });
    return tarjeta;
}

const contenedor = document.querySelector("[data-ul]")

request.listaProductos()
.then((response) => {
    if (Array.isArray(response)) {
        response.forEach(({link, categoria, nombre, precio, id}) => {
            console.log("categorias: ", categoria)
            const nuevaTarjeta = crearTarjeta(link, categoria, nombre, precio, id);
            nuevaTarjeta.classList.add('cards');
            contenedor.appendChild(nuevaTarjeta)
        });
    } else {
        // La respuesta no es un arreglo válido
        alert('La respuesta del servidor no es válida');
    }
})
.catch((error) => alert('Ocurrió un error con esta función'));

console.log("Conexion exitosa")