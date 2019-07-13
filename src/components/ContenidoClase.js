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
import Clase9 from "./clases/Clase9";
import Clase10 from "./clases/Clase10";
import Clase11 from "./clases/Clase11";
import Clase12 from "./clases/Clase12";
import Clase13 from "./clases/Clase13";
import Clase14 from "./clases/Clase14";
import Clase15 from "./clases/Clase15";

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
      case "Chunking como estrategia de aprendizaje individual":
        return <Clase9 />;
      case "Hacer apuntes mejora mi proceso de aprendizaje":
        return <Clase10 />;
      case "Las notas de Cornell":
        return <Clase11 />;
      case "Cómo incrementar mi velocidad de lectura":
        return <Clase12 />;
      case "Aprendo cuando estoy acompañado":
        return <Clase13 />;
      case "Profesor por un día":
        return <Clase14 />;
      case "Evaluar mi conocimiento":
        return <Clase15 />;
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
