import {
    GET_EMPRESA, GET_PAISES, GET_ESTADOS, GET_DENUNCIAS
  } from './actions';
  
  const initialState = {
    empresas: [],
    paises: [],
    estados: [],
    denuncias:[]
  }
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EMPRESA:
        return{
          ...state,
          empresas: action.payload
        }

      case GET_PAISES:
        return{
          ...state,
          paises: action.payload
        }
        

      case GET_ESTADOS:
        return{
          ...state,
          estados: action.payload
        }
        
        case GET_DENUNCIAS:
          return{
            ...state,
            denuncias: action.payload
          }

      default:
        return {...state};
    }
  };
  
 
  
  export default rootReducer;