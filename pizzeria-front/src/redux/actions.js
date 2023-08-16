import axios from 'axios'

export const GET_PRODS = 'GET_PRODS'
export const GET_COMBOS = 'GET_COMBOS'
export const GET_CATES = 'GET_CATES'
export const GET_PRODXCAT = 'GET_PRODXCAT'
export const GET_COMBOSXTIPO = 'GET_COMBOSXTIPO'
export const GET_TIPOSCOMBOS = 'GET_TIPOSCOMBOS'
export const GET_PRODXNAME = 'GET_PRODXNAME'
export const POST_PRODCARR = 'POST_PRODCARR'
export const PUT_CARRITO = 'PUT_CARRITO'
export const DELET_CARRITO = 'DELET_CARRITO'
export const ADD_DOMICILIO = 'ADD_DOMICILIO'


export function getProducts(){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/productos`)
    return dispatch({
      type: GET_PRODS,
      payload: response.data
    })
  }
}

export function getTiposCombos(){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/tiposcombos`)

    return dispatch({
      type: GET_TIPOSCOMBOS,
      payload: response.data
    })
  }
}

export function getCombos(){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/combos`)

    return dispatch({
      type: GET_COMBOS,
      payload: response.data
    })
  }
}

export function getCategorias(){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/categorias`)
    return dispatch({
      type: GET_CATES,
      payload: response.data
    })
  }
}

export function getProductXCat(categoria){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/productos/${categoria}`)

    return dispatch({
      type: GET_PRODXCAT,
      payload: response.data
    })
  }
}

export function getCombosXTipo(tipo){
  console.log(tipo);
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/combos/${tipo}`)
    console.log(response.data);
    return dispatch({
      type: GET_COMBOSXTIPO,
      payload: response.data
    })
  }
}


export function getProductXName(name){
  return async function(dispatch){
    const response = await axios(`https://pizzeria-back.vercel.app/productos/search/${name}`)

    return dispatch({
      type: GET_PRODXNAME,
      payload: response.data
    })
  }
}

export function addProductCarrito(product){
  return async function(dispatch){
    return dispatch({
      type: POST_PRODCARR,
      payload: product
    })
  }
}

export function upDateCarrito(results){
  return async function(dispatch){
    return dispatch({
      type: PUT_CARRITO,
      payload: results
    })
  }
}

export function clearCarrito(){
  return async function(dispatch){
    return dispatch({
      type: DELET_CARRITO,
      payload:true
    })
  }
}

export function addDomcilio(numero){
  return async function(dispatch){
    return dispatch({
    type: ADD_DOMICILIO,
    payload: numero
  })
}}

//! ME FALTAN todas las cragas de datos