import React from "react";

const contacto = () => {
  return (
    <div className="container text-center mt-3">
      <p className="fs-2">Cuentanos, ¿En qué podemos ayudarte?</p>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescrption" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control p-4"
            id="exampleInputDescription"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default contacto;
