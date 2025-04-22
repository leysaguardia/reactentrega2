import './App.css'

import Titulo from './components/Titulo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import ContadorEventListener from './components/ContadorEventListener'
import Formulario from './components/Formulario'
import CartProvider from './context/CartContext' 

const HomePage = () => (
  <>
    <h1 className="titulo">Bienvenidos</h1>
    <ItemListContainer saludo="Mermeladas naturales, libres de aditivos e ingredientes artificiales" />
    <ItemCount stock={5} agregarAlCarrito={(count) => console.log(count)} />
  </>
);

function App() {
  return (
    <BrowserRouter  basename="/reactentrega2">
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Filtrado por categoría" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/contador" element={<ContadorEventListener />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

        <Titulo />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

