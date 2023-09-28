// Conexion para OBTENER nuestros datos de los productos (GET)
const listaProductos = () => 
    fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json)

// Conexion para REGISTRAR un nuevo producto en nuestra DB (POST)
const agregarProducto = (nombre, email) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, email})
    });
};


// Conexion para ELIMINAR un producto de nuestra DB (DELETE)
const eliminarProducto = (id) => {
    fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
};


export const request = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
};