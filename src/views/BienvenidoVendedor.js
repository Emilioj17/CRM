import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/BienvenidoVendedor.css"
import Heroe from "../img/BienvenidoAdmin_img1.png"
import Heroe2 from "../img/BienvenidoAdmin_img2.png"
import { Link } from "react-router-dom";

const BienvenidoVendedor = () => {
  return (
    <div className="BienvenidoVendedor">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Bienvenido Vendedor</h2>
            <p><Link to="/BienvenidoAdministrador">Vista Administrador</Link></p>
          </div>
          <div>
            <Link to="#"><button type="button" className="btn btn-success m-1">Inicio</button></Link>
            <Link to="/contactos"><button type="button" className="btn btn-success m-1">Posibles</button></Link>
            <Link to="/contactos"><button type="button" className="btn btn-success m-1">Contactos</button></Link>
            <Link to="/tratos"><button type="button" className="btn btn-success m-1">Tratos</button></Link>
            <Link to="/sendEmail"><button type="button" className="btn btn-success m-1">Correos</button></Link>
          </div>
        </div>
        <div className="col-12 Heroe1">
          <h4>Rendimiento a 30 dias</h4>
          <img src={Heroe} alt="" />
        </div>
        <div className="col-6 Heroe2">
          <h4>Canal por Fase</h4>
          <img src={Heroe2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default BienvenidoVendedor;
