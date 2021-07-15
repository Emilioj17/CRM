import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/BienvenidoAdministrador.css"
import Heroe from "../img/BienvenidoAdmin_img1.png"
import Heroe2 from "../img/BienvenidoAdmin_img2.png"
import { Link } from "react-router-dom";

const BienvenidoAdministrador = () => {
  return (
    <div className="BienvenidoAdministrador">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Bienvenido Administrador</h2>
            <p><Link to="/BienvenidoVendedor">Vista Vendedor</Link></p>
          </div>
          <div>
          <Link to="/PanelAdministrador"><button type="button" class="btn btn-success">Configuracion</button></Link>
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
export default BienvenidoAdministrador;
