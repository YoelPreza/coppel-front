import React from "react";
import { Link } from "react-router-dom";

class LandingView extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl mt-28">
          {this.props.welcomeMessage}
        </h1>
        <h2 className="text-center   text-3xl mb-24 w-[400px]">
          {this.props.explication}
        </h2>
        <div>
          <Link to="/register">
            <button className="bg-blue-400 w-40 m-10 rounded-md p-2 text-3xl">
              Registrar Denuncia
            </button>
          </Link>
          <Link to="/follow-up">
            <button className="bg-blue-400 w-56 m-10 rounded-md p-2 text-3xl">
              Seguimiento de Denuncia
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingView;
