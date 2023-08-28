import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar/sidebar';
import Cards from '../../components/cards/cards';
import NavBar from '../../components/navbar/navbar';
import './home.css';
import { getCombosXTipo, getProductXCat, getProducts, getCombos, getProductXName } from '../../redux/actions';
import { useState } from 'react';

function Home() {
  const dispatch = useDispatch();
  const allCategorias = useSelector((state)=> state.allCategorias)
  const allTiposCombos = useSelector((state)=> state.allTiposCombos)
  const elegidos = useSelector((state)=> state.elegidos)
  const [nameElegido, setNameElegido] = useState('Listado de Todos los Combos')


  const handleClickCate=(e)=>{
    dispatch(getProducts(e.target.value))
    setNameElegido('Listado de Todos los Productos')
  }

  const handleClickCombo=(e)=>{
    dispatch(getCombos(e.target.value))
    setNameElegido('Listado de Todos los Combos')
  }

  const handleClickComboXTipo = (e)=>{
    dispatch(getCombosXTipo(e.target.value))
  }

  const handleClickProdXCate = (e)=>{
    dispatch(getProductXCat(e.target.value)) 
  }

  const handleInputChange = (e)=>{
    dispatch(getProductXName(e.target.value))
  } 

  return (
    <div className='container-fluid m-2'>

        <NavBar handlerSubmit={handleInputChange} />
        <div className='row text-center mi-div'>
        <div className='col-md-3 col-sm-12'>
            <Sidebar 
                handleClickComboXTipo={handleClickComboXTipo} 
                handleClickProdXCate={handleClickProdXCate}
                allCategorias={allCategorias}
                allTiposCombos={allTiposCombos}
                handleClickCombo={handleClickCombo} 
                handleClickCate={handleClickCate}
                />          
        </div>
        <div className='col col-md-9 col-sm-12 mt-3'>
            <Cards  elegidos ={elegidos} nameElegido={nameElegido}/>
        </div>
        </div>  
    </div>
  );
}

export default Home;