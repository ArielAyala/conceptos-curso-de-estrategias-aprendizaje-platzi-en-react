import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Contenido from "./Contenido";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contenido" component={Contenido} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
