import React, { Component } from "react";
import { connect } from "react-redux";
import AdminModel from "../models/adminModel";
import AdminView from "../views/adminView";
import { getDenuncias } from "../Redux/actions";

export class AdminController extends Component {
  constructor(props) {
    super(props);
    this.model = new AdminModel();
    this.state = this.model.getLocalState();
  }
  componentDidMount() {
    this.props.getDenuncias();
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      const response = await fetch(
        `http://localhost:3004/api/admin/${email}/${password}`
      );
      const data = await response.json();
      console.log({ data });

      if ( data.password === password) {
        this.setState({ loggedIn: true });
        this.model.state.loggedIn = true;
      }else{alert("usuario no encontrado")}
    } catch (error) {
      console.error("Error al verificar las credenciales:", error);
    }
  };

  handlenputChangeForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log({ a: this.model.getLocalState() });
    this.model.setLocalState("formData", {
      ...this.state.formData,
      [name]: value,
    });
    this.setState(this.model.getLocalState());
  };

  handleLogout = () => {
    this.model.logout();
    this.setState(this.model.getLocalState());
    this.forceUpdate();
  };

  handleVerDetallesClick = async (denuncia, id) => {
    const comentarios = await this.model.selectDenuncia(denuncia, id);
    console.log(denuncia);
    this.setState({
      comentarios: comentarios,
      formData: {
        ...this.state.formData,
        folio: id,
      },
    });

    this.forceUpdate();
  };

  handleAgregarComentario = async () => {
    const response = await fetch(
      "http://localhost:3002/api/denuncias/comments",
      {
        method: "POST",
        body: JSON.stringify(this.state.formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Mensaje agregado");
      
    } else {
      alert("Falta agregar campos o hubo un error al agregar el comentario.");
    }

    this.forceUpdate();
  };

  render() {
    return (
      <AdminView
        loggedIn={this.state.loggedIn}
        onLogin={this.handleLogin}
        denuncias={this.props.denuncias}
        onLogout={this.handleLogout}
        onVerDetallesClick={this.handleVerDetallesClick}
        onAgregarComentario={this.handleAgregarComentario}
        handleInputChange={this.handleInputChange}
        comentarios={this.state.comentarios}
        handlenputChangeForm={this.handlenputChangeForm}
        formData={this.state.formData}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    denuncias: state.denuncias,
  };
};

const mapDispatchToProps = {
  getDenuncias,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminController);
