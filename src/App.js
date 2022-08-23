import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

//Context
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContex";

function App() {
  return (
    //Para poder utilizar los values que pasa el provider hay que utilizar la etiqueta acá
    //No importa el orden de los providers
    //Dentro de los providers deben estar los componentes donde se van a utilizar sus props
    //Si un componente no está dentro de un provider, no puede usar sus props
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
