
export class FollowUpModel {
constructor(){
  this.state = {
    folio: "",
    password: "",
    denuncia: null,
    comentarios: [],
    error: null,
  };
}
getLocalState = () => {
  return this.state;
};

    buscarDenuncia = async (folio, password) => {
        try {
          const response = await fetch(`http://localhost:3001/api/denuncias/${folio}/${password}`);
          if (!response.ok) {
            throw new Error('Error al buscar la denuncia.');
          }
    
          const denuncia = await response.json();
          console.log(denuncia);
          return denuncia;
        } catch (error) {
          console.error('Error al buscar la denuncia:', error);
          return null;
        }
      };
    
      obtenerComentariosPorId = async (idDenuncia) => {
        try {
          const response = await fetch(`http://localhost:3002/api/denuncias/comments/${idDenuncia}`);
          if (!response.ok) {
            throw new Error('Error al obtener los comentarios.');
          }
    
          const comentarios = await response.json();
          console.log(comentarios);
          return comentarios;
        } catch (error) {
          console.error('Error al obtener los comentarios:', error);
          return [];
        }
      };
    }


export default FollowUpModel