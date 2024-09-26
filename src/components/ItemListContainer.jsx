
import { useState, useEffect } from "react"
import obtenerProductos from "../data/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom"


const ItemListContainer = ({ saludo }) => {
  const[productos, setProductos] = useState([])


const {idCategoria}   = useParams()

   useEffect(()=> {

      obtenerProductos()
          .then((dataProductos) => {
            if(idCategoria){
              const productosFiltrados = dataProductos.filter (( producto) => producto.categoria === idCategoria)
              setProductos(productosFiltrados)

            }else{
              setProductos(dataProductos);
            }

        })

          .catch((error) =>{
            console.error(error);
        })
          .finally(() =>{
            console.log("Finalizo la promesa");
       });

  }, []);

    
    
    return (
      <div>
           <p>{saludo}</p>
       
        <ItemList productos={productos}/>
      

      </div>



    );
  };
   export default  ItemListContainer ;