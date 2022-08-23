//Cuando utilizas Context los datos fluyen a partir de este archivo y no tanto desde el app.js. Es distinto cuando usas props o redux
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//Creación de el Context
export const CategoriasContext = createContext();

//Siempre que creas un context tenes que crear un provider
//El provider es de donde van a salir las funciones y state
//Es la referencia del context
const CategoriasProvider = (props) => {
  //Crear el state del context
  const [categorias, guardarCategorias] = useState([]);

  //useEffect se va a ejecutar cuando se ejecuta una vez se carga el context
  //Ejecutar llamado a la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      //Todo lo que coloques como value en el provider va a estar disponible en todos los componentes
      value={{
        categorias
      }}
    >
      {/* Acá los diferentes componentes se pasan los datos */}
      {props.children}
    </CategoriasContext.Provider>
  );
};

//Hay que importarlo para poder utilizarlo en el componente principal
export default CategoriasProvider;
