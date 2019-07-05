import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Contenido from "./Contenido";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Contenido" component={Contenido} />
    </BrowserRouter>
  );
};

export default App;
