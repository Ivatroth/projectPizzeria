//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './search.css'
import glass from '../../images/glass.svg';
import { getProductXName } from '../../redux/actions'

export default function Search() {
  // Search bar
  //const [name, setName] = useState("")
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  console.log(pathname);
  
  const handleInputChange = (e)=>{
    //setName(e.target.value)
    dispatch(getProductXName(e.target.value))
  }
        
  return (
          <div>
          <div className="search">
            <input 
              disabled ={pathname !== "/pedido" ? false : true} 
              placeholder={pathname !== "/pedido" ? "Que necesitas?" : "Volver a la pagina principal para buscar" } 
              onChange={handleInputChange} 
              autoFocus={true} 
            />
            <img className="glass" alt="magnifying glass" src={glass} />
          </div>
          </div>
  )
}
