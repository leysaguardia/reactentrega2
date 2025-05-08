import React from 'react';
import { useContext } from "react";

import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';



const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/Cart" className="CartWidget">
      <img width={50} src="src/assets/cart-148964_1280.png" alt="Carrito" />
      <p>Items en el carrito: {cantidadTotal()}</p>
    </Link>
  );
};

export default CartWidget;
