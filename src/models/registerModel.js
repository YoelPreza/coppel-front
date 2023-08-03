class RegisterModel {
  constructor() {
    this.localState = {
      formData: {
        empresa: "",
        pais: "",
        estado: "",
        centro: "",
        name: "",
        email: "",
        telefono: "",
        detalle: "",
        fecha: "",
        password: "",
        folio: "",
      },
      confirmPassword: "",
      anonimo: "",
    };
  }
  setLocalState = (field, value) => {
    this.localState[field] = value;
  };

  getLocalState = () => {
    return this.localState;
  };

  submitForm = async () => {

    const { empresa, pais, estado, centro, email, detalle, fecha, password } =
      this.localState.formData;

    const { confirmPassword, anonimo } = this.localState;

    if (
      !centro ||
      !detalle ||
      !fecha ||
      !estado ||
      !empresa ||
      !pais ||
      !confirmPassword ||
      !password
    ) {
      this.localState.error = "Todos los campos son obligatorios.";
      return;
    }
    if (anonimo === "no") {
      const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        this.localState.error = "El correo electrónico ingresado no es válido.";
        return;
      }
    }

    if (password !== confirmPassword) {
      this.localState.error = "Las contraseñas no coinciden.";
      return;
    }

    if (password.length > 8) {
      this.localState.error =
        "La contraseña debe tener una longitud máxima de 8 caracteres.";
      return;
    }
   
    this.localState.error = null;

    const response = await fetch("http://localhost:3001/api/denuncias", {
      method: "POST",
      body: JSON.stringify(this.localState.formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    this.localState.formData.folio = data.folio;
  };
}

export default RegisterModel;
