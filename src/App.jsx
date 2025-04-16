
import './App.css'

import Titulo from './components/Titulo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/cart'
import ContadorEventListener from './components/ContadorEventListener'
import Formulario from './components/Formulario'
import CartProvider from './context/CartContext' 



function App() {
 

    const agregarAlCarrito = (count) =>{
      console.log(count)
    }

  
  return (
      <BrowserRouter >
        <CartProvider>
          <NavBar/>

            <Routes>

              <Route path="/" element={ <ItemListContainer  saludo= "" />}/>
              <Route path="/" element={ <h1 className='titulo'>{}</h1>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer  saludo= "Mermeladas naturales, libres de aditivos e ingredientes artificiales" />} />
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
              <Route path="/" element={<ItemCount stock={5} agregarAlCarrito={agregarAlCarrito}/>}/>  
              <Route path="/Contador" element={<ContadorEventListener/>}/>
              <Route path="/formulario" element={<Formulario/>}/>
              <Route path="/Cart" element={<Cart />} />


            </Routes>
           
           <Titulo/>
          <ItemDetailContainer/>
        </CartProvider>
      </BrowserRouter>

  )
}



export default App;
