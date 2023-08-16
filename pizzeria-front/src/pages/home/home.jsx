import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar/sidebar';
import Cards from '../../components/cards/cards';
import NavBar from '../../components/navbar/navbar';
import './home.css';
import { getCombosXTipo, getProductXCat, getProducts, getCombos, getProductXName } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const allCategorias = useSelector((state)=> state.allCategorias)
  const allTiposCombos = useSelector((state)=> state.allTiposCombos)
  const elegidos = useSelector((state)=> state.elegidos)


  const handleClickCate=(e)=>{
    dispatch(getProducts(e.target.value))
  }

  const handleClickCombo=(e)=>{
    dispatch(getCombos(e.target.value))
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
    <div className='container-fluid my-2'>
      <div className='col'>
        <NavBar handlerSubmit={handleInputChange} />

        <div className='row'>
          <div className='col-md-3 col-12'>
            <Sidebar className="container-fluid"
              handleClickComboXTipo={handleClickComboXTipo} 
              handleClickProdXCate={handleClickProdXCate}
              allCategorias={allCategorias}
              allTiposCombos={allTiposCombos}
              handleClickCombo={handleClickCombo} 
              handleClickCate={handleClickCate}

              />
          </div>
          <div className='col-md-9 col-12 mt-3'> 
            <Cards elegidos ={elegidos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;