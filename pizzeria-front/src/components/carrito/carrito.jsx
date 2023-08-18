import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { upDateCarrito, clearCarrito } from "../../redux/actions";
//import  listProduct  from "../listProduct/listProduct";
import './carrito.css'

export default function Carrito() {
    const dispatch = useDispatch();
    const carrito = useSelector((state)=> state.carrito)
    const totalCarr = useSelector((state)=> state.totalCarr)
    const countProducts = useSelector((state)=> state.countProducts)
    const [active, setActive] = useState(false);
    const anchoPantalla = window.innerWidth;

	const onDeleteProduct = product => {
		const results = carrito.filter(
			item => item.id !== product.id
	    );
      //! aqui agregar unas actions para actualizar los estados
        dispatch(upDateCarrito(results))
	};

	const onCleanCart = () => {
    //! aqui agregar unas actions para borrar los estados
        dispatch(clearCarrito())
	};

  return (
    <div className='container-icon'>
    <Link to={anchoPantalla <= 765 ? '/pedido' : ''}>
    <div
        className='container-cart-icon'
        onClick={()=> setActive(!active)}
    >
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='icon-cart'
      
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
        </svg>
        <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
        </div>
    </div></Link>

    <div
        className={`cart-active container-cart-products ${
            active ? '' : 'hidden-cart'
        }`}
    >
        {carrito.length ? (
            <>
                {/* <listProduct onDeleteProduct={onDeleteProduct} carrito = {carrito}  /> */}
                <div className='row-product'>
                    {carrito.map(product => (
                        <div className='cart-product' key={product.id}>
                            <div className='info-cart-product'>
                                <span className='cantidad-producto-carrito px-2'>
                                    {product.cantidad}-
                                </span>
                                <img src={product.img} alt={product.name} style={{ width: '30%', height: '30%', objectFit: 'cover' }} />
                                <p className='titulo-producto-carrito px-3'>
                                    {product.name}
                                </p>
                                <span className='precio-producto-carrito'>
                                    ${product.price}
                                </span>
                            </div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='icon-close'
                                onClick={() => onDeleteProduct(product)}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </div>
                    ))}
                </div>
                
                <div className='cart-total'>
                    <h3>Total:</h3>
                    <span className='total-pagar'>${totalCarr}</span>
                </div>
                <Link to="/pedido">
                <button className='btn-clear-all mb-2'>
                    Confirma tu Pedido
                </button>
                </Link>
                <button className='btn-clear-all' onClick={onCleanCart}>
                    Vaciar Carrito
                </button>
            </>
        ) : (
            <p className='cart-empty'>El carrito está vacío</p>
        )}
    </div>
</div>


  )
}
