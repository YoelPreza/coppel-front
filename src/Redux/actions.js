export const GET_EMPRESA = "GET_EMPRESA";
export const GET_PAISES = "GET_PAISES";
export const GET_ESTADOS = "GET_ESTADOS";
export const GET_DENUNCIAS = "GET_DENUNCIAS";





// Aquí definimos las funciones que realizarán las peticiones a las rutas
export const getEmpresas = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3003/api/select-options/empresa");
      const empresas = await response.json();
      dispatch({ type: GET_EMPRESA, payload: empresas });
    } catch (error) {
      console.error("Error fetching empresas:", error);
    }
  };
};

export const getPaises = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3003/api/select-options/pais");
      const paises = await response.json();
      dispatch({type: GET_PAISES, payload: paises});
    } catch (error) {
      console.error("Error fetching paises:", error);
    }
  };
};

export const getEstadosById = (pais_id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3003/api/select-options/estados/${pais_id}`);
      const estados = await response.json();
      dispatch({type: GET_ESTADOS, payload: estados});
    } catch (error) {
      console.error("Error fetching paises:", error);
    }
  };
};


export const getDenuncias = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/denuncias");
      const denuncias = await response.json();
      dispatch({type: GET_DENUNCIAS, payload: denuncias});
    } catch (error) {
      console.error("Error fetching paises:", error);
    }
  };
};
