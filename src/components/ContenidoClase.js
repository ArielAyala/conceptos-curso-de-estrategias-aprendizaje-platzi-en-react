import React, { Component, Fragment } from "react";

//Clases
import Clase1 from "./clases/Clase1";
import Clase2 from "./clases/Clase2";

class ContenidoClase extends Component {
  render() {
    return (
      <Fragment>
        <Clase1 />
        <Clase2 />
      </Fragment>
    );
  }
}

export default ContenidoClase;
