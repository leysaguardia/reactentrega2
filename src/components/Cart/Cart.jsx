import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
 



const Cart = () => {
  const { carrito, precioTotal } = useContext(CartContext);

  if (carrito.length === 0) {
    return null
  }

  return (
    <div>
      <ul style={{ display: 'flex', flexDirection: "column", gap: "1rem" }}>
        {carrito.map((productoCarrito) => (
          <li key={productoCarrito.id} style={{ display: 'flex' }}>
            <img width={150} src={productoCarrito.imagen} alt={productoCarrito.nombre} />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio}</p>
          </li>
        ))}
      </ul>
      <h3>Precio total: ${precioTotal()}</h3>
    </div>
  );
};

export default Cart;
