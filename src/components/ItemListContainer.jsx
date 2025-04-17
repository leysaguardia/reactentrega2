import React from 'react';
import { useState, useEffect } from "react"
import obtenerProductos from '../data/data.js'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { db } from '../firebaseConfig.js';
import {collection, addDoc, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState ([]);
  const[productos, setProductos] = useState([])


const {idCategoria}   = useParams()

   useEffect(()=> {

      let productosCollection = collection( db, "productos");

      let consulta =productosCollection;
      if( idCategoria) {

      let productosCollectionFiltered = query( productosCollection, where ( "categoria", "==", idCategoria ))

      consulta = productosCollectionFiltered; 
    }

      getDocs(consulta).then((res)=> {
        let nuevoArray = res.docs.map ((elemento)=>{
          return { id: elemento.id, ...elemento.data()};
        })

        setItems(nuevoArray);

      });

  }, [idCategoria]);

    
 // const cargarProductos = ()=>{
 //     let refCollection = collection (db ,"productos" );
 //      
 //       productos.forEach((elemento) => {  
 //           addDoc( refCollection, elemento )
//
//        });
//};

//la funcion y el boton se comentan porque ya no se usan, una vez que se subieron a firebase, se hace una sola vez


    return (
      <div>

      {/*<button onClick={cargarProductos}> Cargar muchos productos</button>*/}

           <p>{saludo}</p>
       
        <ItemList productos={productos}/>
      

      </div>



    );
  };
   export default  ItemListContainer ;