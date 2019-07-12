import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Clases
import Clase1 from "./clases/Clase1";
import Clase2 from "./clases/Clase2";
import Clase3 from "./clases/Clase3";
import Clase4 from "./clases/Clase4";
import Clase5 from "./clases/Clase5";
import Clase6 from "./clases/Clase6";
import Clase7 from "./clases/Clase7";
import Clase8 from "./clases/Clase8";

class ContenidoClase extends Component {
  mostrarClase = () => {
    switch (this.props.claseActual) {
      case "¿Qué es el aprendizaje?":
        return <Clase1 />;
      case "Tipos de pensamiento":
        return <Clase2 />;
      case "Etapas del aprendizaje":
        return <Clase3 />;
      case "Tipos de estudiantes":
        return <Clase4 />;
      case "Reglas de aprendizaje efectivo":
        return <Clase5 />;
      case "La atención y lo que no sabía de la técnica pomodoro":
        return <Clase6 />;
      case "Cómo puedo sacar el máximo provecho a mi memoria":
        return <Clase7 />;
      case "Consejos para memorizar mejor":
        return <Clase8 />;
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
