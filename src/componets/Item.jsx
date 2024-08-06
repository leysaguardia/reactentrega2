import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  return (
   
    <div> 
          <img width={100} src={producto.imagen} alt="" />
          <p>{producto.nombre}</p>

          <Link to={"/detalle/"+ producto.id} >Ver detalles</Link>


     </div>


  )
}

export default Item