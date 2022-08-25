import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

//Modal materia ui viejo
// import Modal from "@mui/material/Modal";
// import { makeStyles } from "@mui/material/styles";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 450,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// //

//MODAL NUEVO
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  //Configuración del modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Extraer los valores del context
  const { informacion, guardarIdReceta, guardarReceta } =
    useContext(ModalContext);

  //Mostrar y formatear los ingredientes (no vienen en un arreglo desde la api)
  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strIngredient${i}`]}
            {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>

          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {informacion.strDrink}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <b> Instrucciones: </b> <br />
                {informacion.strInstructions}
              </Typography>
              <img
                className="img-fluid my-4"
                src={informacion.strDrinkThumb}
                alt="imgdrink"
              />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <b> Ingredientes: </b> <br />
                <ul>{mostrarIngredientes(informacion)}</ul>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
