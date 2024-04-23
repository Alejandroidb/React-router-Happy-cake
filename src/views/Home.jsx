import React from "react";
const home = () => {
  return (
    <div className="container text-center">
      <p className="fs-1 mt-3">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </p>
      <p className="fs-4">El lugar de los pasteles felices</p>
      <img src="./public/chocolate_cake.png" alt="" />
    </div>
  );
};

export default home;
