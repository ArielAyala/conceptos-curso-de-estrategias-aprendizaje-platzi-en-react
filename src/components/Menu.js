import React from "react";

const Menu = (props) => {
  return (
    <div className="container-menu">
      <h4 className="ml-3">Contenido</h4>
      <div className="list-group">
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-1"
        >
          ¿Qué es el aprendizaje?
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-2"
        >
          Item 2
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-3"
        >
          Item 3
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-4"
        >
          Item 4
        </a>
      </div>
    </div>
  );
};

export default Menu;
