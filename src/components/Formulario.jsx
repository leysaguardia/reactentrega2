import { useState } from "react";
import "./Formulario.css"

const Formulario = () => {

    const[nombre, setNombre] = useState("");
    const[direccion, setDireccion] = useState("");
    const[email, setEmail] = useState("");


    function handleChangeNombre(event) {
        setNombre(event.target.value);
    }
    
    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmitForm = (event) =>{
        event.preventDefault()

        const usuario = { nombre, direccion, email }
        console.log(usuario)
        setNombre("")
        setDireccion("")
        setEmail("")

    };

    
      
  return (
    <form onSubmit={handleSubmitForm} >
        <label>Nombre:    </label>
        <input type="text" value= {nombre} onChange={handleChangeNombre} ></input>


        <label>Direccion:    </label>
        <input type= "text" value= {direccion} onChange={handleChangeDireccion} ></input>


        <label>Email:    </label>
        <input type= "text" value= {email}  onChange={handleChangeEmail} ></input>

        <button type="submit">Enviar formulario</button>








    </form>
  );
};

export default Formulario;