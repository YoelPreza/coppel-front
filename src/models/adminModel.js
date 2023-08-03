// import { Component } from 'react'

export class AdminModel {
  constructor() {
    this.state = {
      formData: {
        status: "",
        contenido: "",
        folio: "",
        usuario_id: 1,
      },
      email: "",
      password: "",
      loggedIn: false,
      comentarios: [],
      error:""
    };
  }

  getLocalState = () => {
    return this.state;
  };

  setLocalState = (field, value) => {
    this.state[field] = value;
  };

  logout() {
    this.state.loggedIn = false;
    this.state.comentarios= [];
  }

  selectDenuncia = async (folio, id) => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/denuncias/comments/${folio}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener los comentarios.");
      }

      const comentarios = await response.json();
      
      return comentarios;
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
      return [];
    }
  };


}

export default AdminModel;
