import React, { Component } from "react";
import "./estilos/App.css";
import TablaEmpleados from "./componentes/TablaEmpleados";
import Registrar from "./componentes/Registrar";

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>LISTADO DE PRODUCTOS</h1>
        <TablaEmpleados />
        <Registrar />
      </div>
    );
  }
}

export default App;
