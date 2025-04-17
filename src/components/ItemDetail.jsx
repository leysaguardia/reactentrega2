import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import {collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
   const [item, setItem] = useState ({});

   const { id } = useParams(); 

   useEffect(() =>{
      let refCollection = collection( db , "productos");
      let refDoc = doc( refCollection, id);
      getDoc(refDoc).then((res ) => {
        setItem({ id: res.id, ...res.data() });


   });


    

   }, [id]);

   


 return (

    <div>
        <h1>{item.nombre}</h1>
        <img src={item.imageUrl} alt={item.nombre} />


    </div>
 );


};

export default ItemDetail;

