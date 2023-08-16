import { 
    GET_PRODS, 
    GET_COMBOS, 
    GET_PRODXCAT, 
    GET_CATES, 
    GET_COMBOSXTIPO, 
    GET_TIPOSCOMBOS, 
    GET_PRODXNAME, 
    POST_PRODCARR,
    PUT_CARRITO,
    DELET_CARRITO,
    ADD_DOMICILIO } from "./actions";

let initialState = {
    allProductos:[],
    allCategorias:[],
    allCombos:[],
    allTiposCombos: [],
    elegidos:[],
    carrito:[],
    totalCarr:0,
    countProducts:0
}

const rootReducer = (state = initialState, action) => {
    let products ={}

    switch (action.type) {
         case GET_PRODS:
            return {
                ...state,
                allProductos: action.payload,
                elegidos: action.payload,
            }
         case GET_COMBOS:
            return{
                ...state,
                allCombos: action.payload,
                elegidos: action.payload,
            }
        case GET_PRODXCAT:
            return{
                ...state,
                // allProductos: action.payload,
                elegidos: action.payload,
            }
        case GET_CATES:
            return{
                ...state,
                allCategorias: action.payload
            }
        case GET_COMBOSXTIPO:
            return{
                ...state,
                // allCombos: action.payload,
                elegidos: action.payload,
            }

        case GET_TIPOSCOMBOS:
            return{
                ...state,
                allTiposCombos: action.payload,
            }

        case GET_PRODXNAME:
            return{
                ...state,
                elegidos: action.payload,
            }

        case POST_PRODCARR :
            const {price} = action.payload  

            // aqui verificamos si el producto no esta ya en el carrito, en ese caso solo aumentamos la cantidad
            
            if(state.carrito.find(p => p.id === action.payload.id)){
                products = state.carrito.map(p => p.id === action.payload.id ? {...p, cantidad:p.cantidad+1}: p)//, price: parseInt(p.price)+parseInt(action.payload.price)} : p)
            }
            else products = [...state.carrito, action.payload]
            
            return{
                ...state,
                carrito: products,
                totalCarr: parseInt(state.totalCarr) + parseInt(price),
                countProducts: parseInt(state.countProducts) + 1
            }
            
        case PUT_CARRITO:
            // sumamos las cantidades antes de actualuzar el carro
            let total = 0
            let count = 0
            for(let p of action.payload){
                total += p.price
                count += p.cantidad
            }

            return{
                ...state,
                carrito: action.payload,
                totalCarr: parseInt(total),
                countProducts: parseInt(count)
            }

        case DELET_CARRITO:
            return{
                ...state,
                carrito: [],
                totalCarr: 0,
                countProducts: 0
            }
        
        case ADD_DOMICILIO:
            return{
                ...state,
                totalCarr: parseInt(state.totalCarr + action.payload)
            }
        default:
        return { ...state };
    }
}

export default rootReducer;