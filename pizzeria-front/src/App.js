import './App.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getCategorias, getTiposCombos, getCombos } from '../src/redux/actions';
import Home from './pages/home/home';
import Pedido from './pages/pedido/pedido'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCombos())    
    dispatch(getTiposCombos())    
    dispatch(getCategorias())
    return (()=>{})
  }, [dispatch])

  return (
    <div className='container-fluid'>
      <header className='bg-gradient bg-light py-2 header'>
        {/* <p className="d-flex align-items-center justify-content-center py-sm-1 text-sm text-md font-weight-medium textocolor h4"> */}
         <h4 className="titulo d-flex align-items-center justify-content-center">
          ENVIO GRATUITO en pedidos superiores a $ 10.000 dentro de la ciudad de Córdoba.
         </h4> 
        {/* </p> */}
      </header>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pedido" element={<Pedido />}></Route> 
     </Routes>
    </div>
  );
}

export default App;
