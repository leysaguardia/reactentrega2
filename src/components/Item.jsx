import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    const [expandir, setExpandir] = useState(false)


    const handleMouseOver =()  =>{
        setExpandir(true)
    };

    const handleMouseLeave =()  =>{
        setExpandir(false)
    };


    const estilocard = {
      transform: expandir ? 'scale(1.1)' :  'scale(1)' ,
      transition: 'transform 0.3s ease-in-out',
      margin:"0 100px",
    }


  return (
   
    <div  onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}
     style={ estilocard }
     className={expandir ?  "cardExpandida" : "card"}> 
      
          <img width={100} src={producto.imagen} alt="" />
          <p>{producto.nombre}</p>

          <Link to={"/detalle/"+ producto.id} >Ver detalles</Link>


     </div>


  );
};

export default Item;