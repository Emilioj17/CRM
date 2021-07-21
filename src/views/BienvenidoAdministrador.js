import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/BienvenidoAdministrador.css"
import Heroe from "../img/BienvenidoAdmin_img1.png"
import Heroe2 from "../img/BienvenidoAdmin_img2.png"
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../store/appContext';
import ChartDemo from '../components/Graficos';

const BienvenidoAdministrador = () => {
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
      // actions.getContacts();
      // actions.getUsers();
      // actions.getNotes();
      // actions.getDeals();
    }
  }, []);

  return (
    <div className="BienvenidoAdministrador">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <NombreUsuario />
            <p><Link to="/BienvenidoVendedor">Vista Vendedor</Link></p>
          </div>
          <div>
            <Link to="/PanelAdministrador"><button type="button" className="btn btn-success">Configuracion</button></Link>
          </div>
        </div>
        <div className="">
          <ChartDemo />
        </div>
      </div>
    </div>
  );
};
export default BienvenidoAdministrador;
