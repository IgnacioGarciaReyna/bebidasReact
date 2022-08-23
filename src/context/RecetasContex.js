import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  //State recetas
  const [recetas, guardarRecetas] = useState([]);

  //State busqueda
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  //State
  const [consultar, guardarConsultar] = useState(false);

  //Obtener las variables de la busqueda para usarlos en el llamado a la api
  const { nombre, categoria } = busqueda;

  //Llamado a la api
  useEffect(() => {
    //Validación
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await axios.get(url);
        // console.log(resultado.data.drinks);
        guardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider value={{ buscarRecetas, guardarConsultar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
