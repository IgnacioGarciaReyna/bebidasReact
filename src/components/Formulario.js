import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  //No por usar context se debe crear solo states que estén en el context. Se pueden crear state para cada componente
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  //Consumir los datos del context
  //Aquí useContext pide un context que es el que creamos en CategoriasContext.js. Por eso debemos importarlo
  //categorias es el resultado del llamado a la api
  const { categorias } = useContext(CategoriasContext);

  //función para leer los contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Buscar bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
            <option value="" key="">
              -- Selecciona categoría --
            </option>
            {categorias.map((categoria) => (
              <option value={categoria.strCategory} key={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
