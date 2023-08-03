import React, { Component } from "react";

export class followUpView extends Component {
  render() {
    const {
      folio,
      password,
      denuncia,
      comentarios,
      error,
      onBuscarClick,
      onInputChange,
    } = this.props;

    return (
      <div className="h-screen  flex flex-row justify-center items-center">
        <div className="flex w-1/3 flex-col border border-black p-10 rounded-xl justify-center items-center">
          <h1 className=" text-3xl mb-5">Seguimiento de Denuncia</h1>
          <div className="flex flex-row justify-start pb-5">
            <label className="text-2xl mr-5">Folio:</label>
            <input
              type="text"
              name="folio"
              value={folio}
              onChange={onInputChange}
              placeholder="Folio de tu denuncia"
            />
          </div>
          <div className="flex flex-row justify-start pb-5">
            <label className="text-2xl mr-5">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Password de denuncia"
            />
          </div>
          <button
            className="bg-blue-400 w-[200px] m-5 rounded-md p-1 text-2xl"
            onClick={onBuscarClick}
          >
            Buscar
          </button>
        </div>

        <div className="  flex w-1/2 flex-col justify-center items-center">
          {denuncia && (
            <div>
              <h2 className="text-3xl ">Información de Denuncia</h2>
              <p className="text-2xl text-center">Folio: {denuncia.folio}</p>
            </div>
          )}

          {comentarios.length > 0 && (
            <div className=" border border-black text-2xl p-3 my-10 rounded-md">
              <h2 className="text-2xl ">Comentarios:</h2>
              {comentarios.map((comentario, index) => (
                <div key={index}>
                  <p>
                    Comentario{index + 1}: {comentario.contenido}
                  </p>
                </div>
              ))}
            </div>
          )}

          {comentarios.length > 0 && (
            <h3 className="text-2xl ">
              Estatus: {comentarios[comentarios.length - 1]?.status}{" "}
            </h3>
          )}

          {error && <p>{error}</p>}
          {denuncia && comentarios.length === 0 && (
            <div>
              <p>No hay comentarios</p> <p>Estatus de la denuncia: Pendiente</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default followUpView;
