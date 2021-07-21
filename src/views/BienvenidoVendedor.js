import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/BienvenidoVendedor.css"
import Heroe from "../img/BienvenidoAdmin_img1.png"
import Heroe2 from "../img/BienvenidoAdmin_img2.png"
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../store/appContext';

const BienvenidoVendedor = () => {
  const { store, actions } = useContext(AppContext);
  const nombreUsuario = store.usuarioActual;
  const NombreUsuario = () => {
    if (nombreUsuario != null) {
      return (
        <h2>Bienvenido {nombreUsuario.name + " " + nombreUsuario.last_name}</h2>
      )
    } else {
      return (<h2>Bienvenido Vendedor</h2>)
    }
  }
  let history = useHistory()

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      history.push('/login')
    }
    actions.getContacts();
    actions.getUsers();
    actions.getNotes();
    actions.getDeals();
  }, []);

  return (
    <div className="BienvenidoVendedor">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5 my-2">
          <div>
            <NombreUsuario />
            <p><Link to="/BienvenidoAdministrador">Vista Administrador</Link></p>
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
