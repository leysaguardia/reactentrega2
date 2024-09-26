import CartWidget from "./CartWidget"

import "./navbar.css"

import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">

     
      <Link  to="/" className="brand">
          
          <img width={80}  height={50}   src="src\assets\Logo1Nmayusc.png" alt="" />
          Naturel Gourmet
      </Link>
       
        <ul className="categories">
        

            <Link to="/categoria/Inicio" className="category">
              <p>Inicio</p>
            </Link>

            <Link to="/categoria/Citricas" className="category">
              <p>Citricas</p>
            </Link>


            <Link to="/categoria/Rosaceas" className="category">
              <p>Rosaceas</p>
            </Link>

            <Link to="/categoria/Contacto" className="category">
              <p>Contacto</p>
            </Link>



        </ul>


      <CartWidget/>

    </nav>

  )
}

export default NavBar