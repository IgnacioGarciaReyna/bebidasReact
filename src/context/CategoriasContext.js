//Cuando utilizas Context los datos fluyen a partir de este archivo y no tanto desde el app.js. Es distinto cuando usas props o redux
import React, { createContext, useState } from "react";

//Creación de el Context
export const CategoriasContext = createContext();

//Siempre que creas un context tenes que crear un provider
//El provider es de donde van a salir las funciones y state
//Es la referencia del context
const CategoriasProvider = (props) => {
  //Crear el state del context
  const [hola, guardarHola] = useState("Hola desde state");

  return (
    <CategoriasContext.Provider
      //Todo lo que coloques como value en el provider va a estar disponible en todos los componentes
      value={{
        hola,
      }}
    >
      {/* Acá los diferentes componentes se pasan los datos */}
      {props.children}
    </CategoriasContext.Provider>
  );
};

//Hay que importarlo para poder utilizarlo en el componente principal
export default CategoriasProvider;
