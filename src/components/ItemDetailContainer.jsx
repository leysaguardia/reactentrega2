import React, { useState, useEffect} from 'react'
import obtenerProductos from '../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { idProducto } = useParams ()
    console.log (idProducto);
    
useEffect(()=>{
        obtenerProductos() .then((data)=>{
            console.log("data" , data);
                const productoEncontrado = data.find(
                     (productoData) => productoData.id===parseInt(idProducto)
                    );
                if(productoEncontrado){
            setProducto(productoEncontrado);
        } 
    console.log (productoEncontrado);
    
    });
}, [] );



  return  <ItemDetail producto={producto}/>;
  
};

export default ItemDetailContainer;