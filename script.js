
let carrito = [];
let total = 0;

function agregarAlCarrito(servicio, precio) {
    carrito.push({ servicio, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');

    carritoItems.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.servicio} - $${item.precio}
                        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        carritoItems.appendChild(li);
    });

    carritoTotal.textContent = total;

    // Show or hide the carrito div based on whether there are items
    carritoDiv.style.display = carrito.length > 0 ? 'block' : 'none';
}
