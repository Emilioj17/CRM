import React from 'react'
import '../style/Registro.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Registro () {
    return (
        <div className="Registro">
            <div>
                <h1>Registrate</h1>
                <input className="Nombre" placeholder="Nombre"></input>
                <input className="Apellido" placeholder="Apellido"></input>
                <input className="Telefono" placeholder="Telefono"></input>
                <input className="Correo" placeholder="Correo"></input>
                <input className="CrearPassword" placeholder="Contraseña"></input>
            </div>
            <button className="Volver">Volver</button>
        </div>
    )
}
export default Registro;