import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Fotos from './pages/fotos';
import Comentarios from './pages/comentarios';
import Contato from './pages/contato';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/comentarios' element={<Comentarios />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
