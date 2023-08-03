import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-[#FFDD30] w-screen h-[50px] flex flex-row fixed  ">
        <img
          className="w-32 ml-8 -justify-center "
          src="https://www.coppel.com/images/emarketing/logo.svg"
          alt="logo coppel"
        />
        <ul className="flex flex-row justify-evenly items-center w-1/2 translate-x-3/4 ">
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <Link to={"/follow-up"}>
            <li>Seguimineto Denuncia</li>
          </Link>
          <Link to={"/admin"}>
            <li>Administrador</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
