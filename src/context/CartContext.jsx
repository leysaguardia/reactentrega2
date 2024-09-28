import React from 'react'
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (productoNuevo) => {
            setCarrito([...carrito, productoNuevo])

    };

    const cantidadTotal = () => {
            const totalProducto = carrito.reduce(( total, productoCarrito)  => total + productoCarrito.cantidad, 0)
            return totalProducto
        }

    console.log(carrito)

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    );
};


export { CartContext };
export default CartProvider;
