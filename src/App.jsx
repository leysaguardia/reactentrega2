
import './App.css'

import Titulo from './componets/Titulo'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  
  return (
      <BrowserRouter >

          <NavBar/>

            <Routes>

              <Route path="/" element={ <ItemListContainer  saludo= "" />}/>
              <Route path="/" element={ <h1 className='titulo'>{}</h1>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer  saludo= "Mermeladas naturales, libres de aditivos e ingredientes artificiales" />} />
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
              <Route path='*' element={ <div>Error404</div>}/>
            </Routes>
           <Titulo/>
        <ItemDetailContainer/>
      </BrowserRouter>

  )
}



export default App
