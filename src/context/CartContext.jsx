 import React from 'react'
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (productoNuevo) => {
            setCarrito([...carrito, productoNuevo])

    };

    const cantidadTotal = () => {
        return carrito.reduce((total, productoCarrito) => {
          const cantidad = productoCarrito?.cantidad ?? 0;
          return total + cantidad;
        }, 0);
      };
      


     const precioTotal = () => {
            return carrito.reduce((total, productoCarrito) => {
              const cantidad = productoCarrito?.cantidad ?? 0;
              const precio = productoCarrito?.precio ?? 0;
              return total + (cantidad * precio);
            }, 0);
          };
          

    console.log(carrito)

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, precioTotal}}>
            {children}
        </CartContext.Provider>
    );
};


export { CartContext };
export default CartProvider;
