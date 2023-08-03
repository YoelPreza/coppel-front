import React from 'react';
import { connect } from 'react-redux';
import RegisterModel from '../models/registerModel';
import RegisterView from '../views/registerView';
import { getEmpresas, getPaises, getEstadosById } from '../Redux/actions';

class RegisterController extends React.Component {
  constructor() {
    super();
    this.model = new RegisterModel();
    this.state = this.model.getLocalState();
  }

  componentDidMount() {
    this.props.getEmpresas();
    this.props.getPaises();
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.model.setLocalState("formData", { ...this.state.formData, [name]: value });
    
    if (name === "pais") {
      const selectedCountry = this.props.paisesOptions.find((pais) => pais.id === parseInt(value));
      if (selectedCountry) {
        this.model.setLocalState("formData", { ...this.state.formData, [name]: selectedCountry.paises });
      }
      this.props.getEstadosById(value);
    }

    this.setState(this.model.getLocalState());
  };
  
  onAnonimoChange = (e) => {
    const { value } = e.target;
    this.model.setLocalState("anonimo", value);
    this.setState({anonimo: value});
  };

  onConfirmPasswordChange = (e)=>{
    const { value } = e.target;
    this.model.setLocalState("confirmPassword", value);
    this.setState({confirmPassword: value});
  }

  onSubmitForm = async () => {
    await this.model.submitForm();
    this.setState(this.model.getLocalState());
  };


  render() {
    return (
      <RegisterView
        formData={this.state.formData}
        empresasOptions={this.props.empresasOptions}
        paisesOptions={this.props.paisesOptions}
        estadosOptions={this.props.estadosOptions}
        onInputChange={this.onInputChange}
        onAnonimoChange={this.onAnonimoChange}
        onSubmitForm={this.onSubmitForm}
        onConfirmPasswordChange={this.onConfirmPasswordChange}
        anonimo={this.state.anonimo}
        confirmPassword={this.state.confirmPassword}
        error={this.state.error}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    empresasOptions: state.empresas,
    paisesOptions: state.paises,
    estadosOptions: state.estados,
  };
};

const mapDispatchToProps = {
  getEmpresas,
  getPaises,
  getEstadosById
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterController);
