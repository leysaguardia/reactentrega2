import React, { useState, useEffect} from 'react'
import obtenerProductos from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { idProducto } = useParams ()

useEffect(()=>{
        obtenerProductos()
            .then((data)=>{
                const productoEncontrado = data.find( (productoData) => String(productoData.id) ===idProducto)
            setProducto(productoEncontrado)
            })
}, [] )



  return (
      <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer