import { useDispatch } from "react-redux";
import {addProductCarrito} from '../../redux/actions'
import './card.css'

// Este componente debe recibir por props los datos a poner 
function Cardd({producto}) {
	const { id, img, name, price } = producto;
  const dispatch = useDispatch();

  const onAddProduct = ()=>{
    dispatch(addProductCarrito({...producto, 'cantidad':1}))
  }
  return (

      <div key={id} className='card mx-2 mb-4 mt-2 shadow-lg p-2' style={{ width: '20rem', height: '26rem' }}>
        <img src={img} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <div className="d-flex flex-column">
          <h4>{name}</h4>
          <h6>$ {price}</h6>
          <div className="d-flex justify-content-center align-items-center mt-auto" style={{ minHeight: '40px' }}>
          <button onClick = {onAddProduct} className="button">
            <span><i className="bi bi-check2-circle"></i>  Lo Quiero</span>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <defs>  </defs> <g id="cart"> <circle r="1.91" cy="20.59" cx="10.07" className="cls-1"></circle> <circle r="1.91" cy="20.59" cx="18.66" className="cls-1"></circle> <path d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" className="cls-1"></path> <polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" className="cls-1"></polyline> </g> </g></svg>
          </button>
          </div>
        </div>
      </div>

  );
}

export default Cardd;