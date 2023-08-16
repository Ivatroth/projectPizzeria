import Search from '../searchbar/search';
import './navbar.css'
import Carrito from '../../components/carrito/carrito'
import { Link } from 'react-router-dom';


function NavBar({ handleSubmit, carrito, countProducts, totalCarr }) {

  return (
    <div>
        <nav className='d-flex align-items-center justify-content-between h5 flex-wrap mi-div pt-3'>
          <div className='p-2'>

            <Link to='/'><img className='logo' src='./logo.jpg' alt='Logo'/></Link>
          </div>
          <div className='color-text'>
            <Search handleSubmit={handleSubmit}/>
          </div>
          <div>
            <i class="col bi bi-twitter px-2"></i>
            <i class="col bi bi-facebook px-2"></i>
            <i class="col bi bi-instagram px-2"></i>
            <i class="col bi bi-whatsapp px-2"></i>
          </div>
          <Carrito carrito={carrito} countProducts={countProducts} totalCarr={totalCarr}/>
        </nav>
    </div>
  );
}

export default NavBar;

