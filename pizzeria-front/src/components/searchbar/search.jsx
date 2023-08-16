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
//     <div className="position-relative d-flex align-items-center justify-content-center my-3 mx-3 bg-slate-300">
//         <span className="position-absolute d-flex align-items-center"
//           style={{ left: 0, top: 0, bottom: 0}}>
//           <i className="bi bi-search px-5"></i>
//         </span>
//         <input
//             type="text"
//             placeholder="Que estas buscando?"
//             className="px-9 focus border rounded-pill font-weight-normal py-2"
//             name="search"
//             style={{ outline: 'none' }}
//             //value={name}
//             onChange={handleInputChange}
//         />
//         {/* <p>{name}</p> */}
// </div>
          <div>
          <div className="">
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
