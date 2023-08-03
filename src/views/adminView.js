import React, { Component } from "react";

export class AdminView extends Component {
  render() {
    const {
      loggedIn,
      onLogin,
      denuncias,
      formData,
      onLogout,
      onVerDetallesClick,
      onAgregarComentario,
      handleInputChange,
      comentarios,
      handlenputChangeForm,
    } = this.props;

    if (!loggedIn) {
      return (
        <div className="h-screen  flex flex-row justify-center items-center">
          <div className="flex w-1/3 flex-col border-2 border-blue-500 p-10 rounded-xl justify-center items-center">
            <h1 className="text-2xl mb-5">Administrador</h1>
            <div>
              <label>Email:</label>
              <input type="text" name="email" onChange={handleInputChange} />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <button
              className=" w-full bg-blue-400 mb-2 mt-5 rounded-md p-1 text-[14px]"
              onClick={onLogin}
            >
              Iniciar Sesión
            </button>
            {/* {error && <p>{error}</p>} */}
          </div>
        </div>
      );
    } else {
      return (
        <div className=" p-3 py-20 flex h-full">
          <div className=" w-1/2 h-screen flex flex-col">
            <button
              className=" w-[200px] m-5 rounded-md p-1 text-1xl translate-x-[1120px] -translate-y-9"
              onClick={onLogout}
            >
              Cerrar Sesión
            </button>

            <h2 className="text-3xl text-center ">Denuncias:</h2>
            <ul className="text-2xl border-2 flex flex-col  p-5 border-blue-500 rounded-xl w-full">
              {denuncias.map((denuncia) => (
                <li className="flex justify-between mr-5" key={denuncia.folio}>
                  Folio: {denuncia.folio} Empresa: {denuncia.empresa}
                  <button
                    className=" w-[100px] bg-blue-400 mb-2 rounded-md p-1 text-[14px]"
                    onClick={() =>
                      onVerDetallesClick(denuncia.folio, denuncia.id)
                    }
                  >
                    Ver Detalles
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {comentarios && (
            <div className=" flex flex-col w-1/2">
              <div className=" flex flex-col p-10 ">
                <h2 className="text-2xl text-center">Detalle de Denuncia</h2>
                <div>
                  <h3 className="text-2xl mt-5">Comentarios:</h3>
                  <ul className="text-2xl border-2 flex flex-col  p-5 border-blue-500 rounded-xl w-full">
                    {comentarios.map((comentario, index) => (
                      <li key={comentario.id}>
                        {index + 1}.- {comentario.contenido},
                      </li>
                    ))}
                  </ul>

                  {comentarios.length > 0 && (
                    <h3 className="text-2xl my-5">
                      Estatus: {comentarios[comentarios.length - 1]?.status}{" "}
                    </h3>
                  )}
                </div>
                <div className="text-2xl border-2 flex flex-col  p-5 border-blue-500 rounded-xl w-full">
                  <label>Agregar Comentario:</label>
                  <input
                    type="text"
                    name="contenido"
                    value={formData.contenido}
                    onChange={handlenputChangeForm}
                    placeholder="Escribir comentario"
                  />

                  <label>Cambiar estatus de la denuncia:</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handlenputChangeForm}
                  >
                    <option value="">Selecione Estatus</option>
                    <option value="Cancelada">Cancelada</option>
                    <option value="Finalizada">Finalizada</option>
                  </select>
                  <button
                    className=" w-full bg-blue-400 mb-2 rounded-md p-1 text-[14px]"
                    onClick={onAgregarComentario}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default AdminView;
