import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Clases
import Clase1 from "./clases/Clase1";
import Clase2 from "./clases/Clase2";

class ContenidoClase extends Component {
  mostrarClase = () => {
    switch (this.props.claseActual) {
      case "¿Qué es el aprendizaje?":
        return <Clase1 />;
        break;
      case "Tipos de pensamiento":
        return <Clase2 />;
        break;

      default:
        return;
    }
  };

  render() {
    return <Fragment>{this.mostrarClase()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return { claseActual: state.clases.claseActual };
};

export default connect(mapStateToProps)(ContenidoClase);
