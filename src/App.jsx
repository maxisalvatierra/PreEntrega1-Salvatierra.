import Home from './componentes/Home/Home';
import Accesorios from './componentes/Accesorios/Accesorios';
import Remeras from './componentes/Remeras/Remeras';
import Pantalones from './componentes/Pantalones/Pantalones';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';

const App = () => {

  return (
    <div>
    <BrowserRouter>
    <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Accesorios' element={<Accesorios/>}/>
          <Route path='/Remeras' element={<Remeras/>}/>
          <Route path='/Pantalones' element={<Pantalones/>}/>
       </Routes>
       </BrowserRouter>
    </div>

  )
}

export default App