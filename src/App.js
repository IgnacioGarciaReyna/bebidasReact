import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";

//Context
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContex";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    //Para poder utilizar los values que pasa el provider hay que utilizar la etiqueta acá
    //No importa el orden de los providers
    //Dentro de los providers deben estar los componentes donde se van a utilizar sus props
    //Si un componente no está dentro de un provider, no puede usar sus props
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
