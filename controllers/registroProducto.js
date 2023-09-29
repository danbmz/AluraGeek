import { request } from "../service/request.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const link = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    console.log(nombre, " - ", precio);
    request.agregarProducto(link,categoria, nombre, precio).then(() => {
        // window.location.href = "/screens/registro_completado.html";
        alert("Producto registrado con exito")
    }).catch((error) => alert("Error 404"));
});

console.log("Conexion muy exitosa")