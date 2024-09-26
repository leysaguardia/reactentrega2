import React, { useEffect } from 'react'
import { useState } from 'react'
import "./ContadorEventListener.css"

const ContadorEventListener = () => {
   const [contador, setContador] = useState(1);

     const handleClickButton = () => {
        setContador( (prev) => prev+ 1);
     };

     const handleClickRestar = () => {
         setContador((prev) => prev - 1);
     };


   useEffect(()=> {
             const botonSumar = document.getElementById("botonSumar")
             const botonRestar = document.getElementById("botonRestar");
             
             botonSumar.addEventListener("click", handleClickButton );
             botonRestar.addEventListener("click", handleClickRestar);

             return () => {
                botonSumar.removeEventListener( "click", handleClickButton)
                botonRestar.removeEventListener("click", handleClickRestar);  
               };

        }, []);



  return (
    <div>
            <p>{contador}</p>
            <button id='botonSumar'>+</button>
            <button id="botonRestar">-</button>

    </div>
  );
};

export default ContadorEventListener;