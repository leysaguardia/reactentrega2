
import { useContext } from "react";

import { CartContext } from "../context/CartContext";




const CartWidget = () => {
  const { carrito } = useContext(CartContext);
    return (
      <div className="cartwidget">
          <img width={50} src="src/assets/cart-148964_1280.png" alt="" />
          <p>Items en el carrito: {carrito.length}</p>
      </div>
    );
  };
  
  export default CartWidget;