import React, { Component } from 'react'
import FollowUpModel from '../models/followUpModel';
import FollowUpView from '../views/followUpView';

class FollowUpControler extends Component {
  constructor() {
    super();
    this.model = new FollowUpModel();
    this.state = this.model.getLocalState();
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onBuscarClick = async () => {
    const { folio, password } = this.state;
    const denuncia = await this.model.buscarDenuncia(folio, password);
    if (denuncia) {
      const comentarios = await this.model.obtenerComentariosPorId(denuncia.folio);
      console.log(comentarios);
      this.setState({ denuncia, comentarios, error: null });
    } else {
      this.setState({denuncia: null,comentarios: [], error: "No se encontró la denuncia.",});
    }
  };

  render() {
    return <FollowUpView 
    model={this.model}
    onInputChange={this.onInputChange}
    onBuscarClick={this.onBuscarClick}
    // state={this.state}
    folio={this.state.folio} 
    password={this.state.password} 
    denuncia={this.state.denuncia} 
    comentarios={this.state.comentarios} 
    error={this.state.error}
    />;
  }
}

export default FollowUpControler