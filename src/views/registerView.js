import React from "react";

class RegisterView extends React.Component {
  render() {
    const {
      formData,
      empresasOptions,
      paisesOptions,
      estadosOptions,
      anonimo,
      confirmPassword,
      onInputChange,
      onAnonimoChange,
      onConfirmPasswordChange,
      onSubmitForm,
      error,
    } = this.props;

    return (
      <div className="flex flex-row justify-center pt-16 items-center ">
        <div className="w-1/2 items-start ml-10 flex flex-col">
          <h1 className="text-3xl mb-5 ">Registro de Denuncia</h1>

          {error && <p className="text-red-700">{error}</p>}

          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5 ">Empresa:</label>
            <select
              name="empresa"
              value={formData.empresa}
              onChange={onInputChange}
            >
              <option value="">Seleccione una empresa</option>
              {empresasOptions.map((empresa, index) => (
                <option key={index} value={empresa.nombre}>
                  {empresa.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5">País:</label>
            <select name="pais" value={formData.pais} onChange={onInputChange}>
              <option value="">Seleccione un país</option>
              {paisesOptions.map((pais, index) => (
                <option key={index} value={pais.id}>
                  {pais.paises}
                </option>
              ))}
            </select>
          </div>

          {formData.pais && (
            <div className="flex flex-row items-center pb-5">
              <label className="text-2xl mr-5">Estado:</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={onInputChange}
              >
                <option value="">Seleccione un estado</option>
                {estadosOptions.map((estado, index) => (
                  <option key={index} value={estado.nombre}>
                    {estado.nombre}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5">Centro:</label>
            <input
              type="text"
              name="centro"
              value={formData.centro}
              onChange={onInputChange}
              placeholder="No. de Centro"
            />
          </div>
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5">Anónimo:</label>
            <input
              type="radio"
              name="anonimo"
              value="si"
              checked={anonimo === "si"}
              onChange={onAnonimoChange}
            />
            <span className="mr-4">Si</span>
            <input
              type="radio"
              name="anonimo"
              value="no"
              checked={anonimo === "no"}
              onChange={onAnonimoChange}
            />
            <span>No</span>
          </div>
          {anonimo === "no" && (
            <div className="flex flex-col items-center pb-5">
              <label className="text-2xl mr-5">Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
              />
              <label className="text-2xl mr-5">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={onInputChange}
              />
              <label className="text-2xl mr-5">Teléfono:</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={onInputChange}
                required
              />
            </div>
          )}
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5">Detalle de la denuncia:</label>
            <textarea
              name="detalle"
              value={formData.detalle}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5 ">Fecha:</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5 ">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-row items-center pb-5">
            <label className="text-2xl mr-5 ">Confirmar contraseña:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            />
          </div>
          <button
            className="bg-blue-400 w-[200px] m-5 rounded-md p-1 text-2xl"
            onClick={onSubmitForm}
          >
            Enviar Denuncia
          </button>
        </div>
        <div className=" w-1/2 flex flex-col items-center">
          {formData.folio && (
            <p className="text-3xl  ">Registro de Denuncia Exitoso </p>
          )}{" "}
          <p className="text-5xl font-bold ">Folio: {formData.folio}</p>
        </div>
      </div>
    );
  }
}

export default RegisterView;
