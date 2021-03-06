import React, { Component } from "react";
import Menu from "./Menu";
import ContenidoClase from "./ContenidoClase";
import { connect } from "react-redux";

class Contenido extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="header-contenido container-fluid header border align-items-center">
          <h3 className="text-right mb-0">
            Estrategias para aprendizaje en linea efectivamente
          </h3>
        </div>

        <div className="container contenido border-right">
          <div>
            <h3 className="titulo-centrado">{this.props.clases.claseActual}</h3>
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Contenido);
