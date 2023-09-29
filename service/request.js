// Conexion para OBTENER nuestros datos de los productos (GET)
const listaProductos = () => 
    fetch("http://localhost:3000/Productos").then((respuesta) => respuesta.json())

// Conexion para REGISTRAR un nuevo producto en nuestra DB (POST)
const agregarProducto = (link, categoria, nombre, precio) => {
    return fetch("http://localhost:3000/Productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({link, categoria, nombre, precio})
    });
};


// Conexion para ELIMINAR un producto de nuestra DB (DELETE)
const eliminarProducto = (id) => {
    fetch(`http://localhost:3000/Productos/${id}`, {
        method: "DELETE",
    })
};


export const request = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
};