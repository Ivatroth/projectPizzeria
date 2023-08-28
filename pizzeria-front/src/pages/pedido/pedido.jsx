import NavBar from '../../components/navbar/navbar';
import { useDispatch } from "react-redux";
import './pedido.css'
import { useSelector  } from 'react-redux'
import { upDateCarrito, addDomcilio } from "../../redux/actions";
import { Link } from 'react-router-dom';
const REACT_APP_NRO_TEL = process.env.REACT_APP_NRO_TEL;


export default function Pedido() {
  const dispatch = useDispatch();
  const carrito = useSelector((state)=> state.carrito)
  const totalCarr = useSelector((state)=> state.totalCarr)

  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    let message = '¡Hola! Estoy interesado en hacer un pedido:\n';

    carrito.forEach((item) => {
      const subtotal = item.cantidad * item.price;
      message += `${item.cantidad} x ${item.name} - Precio unitario: $${item.price} - Subtotal: $${subtotal}\n`;
    });

    message += `Total del pedido: ${totalCarr} (de haber elegido envio a domicilio, ya esta incluido el costo)\n`;

    return encodeURIComponent(message);
  };

  const addDomicilio = (e)=>{
    if(e.target.value === 'domicilio'){dispatch(addDomcilio(350))}
    else {dispatch(addDomcilio(-350))}
  }

  const onDeleteProduct = product => {
		const results = carrito.filter(
			item => item.id !== product.id
	    );
      //! aqui agregar unas actions para actualizar los estados
        dispatch(upDateCarrito(results))
	};

  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row pt-5'>
          {/* lista */}
          <div className='col-12 pt-3 col-lg-7'>
            {/* cabecera */}
            <div className='row subrayado titulo-producto-carrito'>
                {/* <div className='col col-md-1'>X</div> */}
                <div className='col col-md-5'>PRODUCTO</div>
                <div className='col col-md-2 precio'>PRECIO</div>
                <div className='col col-md-2'>CANTIDAD</div>
                <div className='col col-md-2'>SUBTOTAL</div>
            </div>
            {/* lista de productos */}
            <div className='row d-flex align-items-center titulo-producto-carrito py-2'>
              {carrito.map(product => (
                  <>
                  <div className='col col-5 col-md-5'>

                    <div className='row d-flex align-items-center'>
                      <i class="col bi bi-x-circle-fill" onClick={() => onDeleteProduct(product)}></i>
                      <img className='col imagen' src={product.img} alt={product.name} style={{ width: '20%', height: '80%', objectFit: 'cover' }} />
                      <span className='px-3 col'>{product.name}</span>
                    </div>
                    
                  </div>
                  <div className='col col-md-2 precio'>
                    <span>$ {product.price}</span>
                  </div>
                  <div className='col col-md-2'>
                    <span>{product.cantidad}</span>
                  </div>
                  <div className='col col-md-2'>$ {product.cantidad * product.price}</div>

                  </>
              ))
              }
              <div className='d-flex justify-content-center'>
                <Link to="/">
                  <button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>Seguir Comprando...
                  </button>
                </Link>
              </div>

            </div>
          </div>
          <div className='col-12 col-lg-1'></div>
          {/* total */}
          <div className='col-12 border shadow pt-3 px-5 col-lg-4'>
            {/* cabecera */}
            <div className='row subtitulo titulo-producto-carrito'>
              <div className='col col-md-12 subrayado'>TOTAL DEL CARRITO</div>
              <div className='col-md-8 border-bottom py-3'>Subtotal:</div>
              <div className='col-md-4 border-bottom py-3'> $ {totalCarr}</div>
              <div className='col-md-12 pt-2'>
                <p className=''>Envio</p>
                <select className='w-100 py-1' onChange={addDomicilio}>
                  <option value="local">Retiro en Local</option>
                  <option value="domicilio"  >A domicilio - $350.00</option>
                </select>
                <p className='pt-2 text-center'>Una vez confirmado se solicitara el domicio por Whatsapp</p>
              </div>
              <div className='col-md-8 border-bottom py-3 h3'>Total:  $ {totalCarr}</div>
              <p className='pt-2 text-center'>Envianos tu pedido por WhatsApp</p>
              <div className='py-4 col-12 d-flex justify-content-center'>
                <a aria-label="Enviar por WhatsApp" 
                  href={`https://wa.me/${REACT_APP_NRO_TEL}?text=${generateWhatsAppMessage()}`}>
                  <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
                </a>         
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
