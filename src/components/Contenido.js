import React, { Component } from "react";
import Menu from './Menu'

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
          <h3 className="titulo-centrado">¿Que es el aprendizaje?</h3>
         <Menu />
        </div>
      </div>
    );
  }
}

export default Contenido;
