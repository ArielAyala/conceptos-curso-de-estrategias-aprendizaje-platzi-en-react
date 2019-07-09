import React, { Component } from "react";
import Menu from "./Menu";
import ContenidoClase from "./ContenidoClase";

class Contenido extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="header-contenido container-fluid header border">
          <h2 className="text-right">
            Estrategias para aprendizaje en linea efectivamente
          </h2>
        </div>

        <div className="container contenido border">
          <div>
            <h3 className="titulo-centrado">¿Que es el aprendizaje?</h3>
          </div>
          <div className="container-central">
            <Menu />
            <ContenidoClase />
          </div>
        </div>
      </div>
    );
  }
}

export default Contenido;
