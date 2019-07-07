import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(
    null,//Reducers
    {},//Estado inicial
    applyMiddleware(reduxThunk)
}

ReactDOM.render(<App />, document.getElementById("root"));

