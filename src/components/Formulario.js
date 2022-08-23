import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  //Consumir los datos del context
  //Aquí useContext pide un context que es el que creamos en CategoriasContext.js. Por eso debemos importarlo
  //categorias es el resultado del llamado a la api
  const { categorias } = useContext(CategoriasContext);

  console.log(categorias);

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
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria">
            <option value="" key="">
              -- Selecciona categoría --
            </option>
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
