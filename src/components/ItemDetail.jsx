import React from 'react';
import ItemCount from './ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ producto }) => {
  const { carrito, agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };
   //agregarProducto(productoCarrito); // Agrega el producto al carrito
    console.log(productoCarrito);
  };

  return (
    <div className='detail'>
      <div className='img-detail'>
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className='detail-text'>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: c/u ${producto.precio}</p>
        <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>
  );
};

export default ItemDetail;
