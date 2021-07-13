import React from 'react'
import '../style/Registro.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Registro() {
    return (
        <div className="Registro">
            <button type="button" className="btn btn-secondary Admin" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Registro Como Administrador de Vendedores">
                Administrador
            </button>
            <button type="button" className="btn btn-secondary User" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Registro Como Vendedor">
                Usuario
            </button>
            <h1>Registrate</h1>
            <input className="Nombre" placeholder="Nombre"></input>
            <input className="Apellido" placeholder="Apellido"></input>
            <input className="Telefono" placeholder="Telefono"></input>
            <input className="Correo" placeholder="Correo"></input>
            <input className="CrearPassword" placeholder="Contraseña"></input>
            <button className="Volver">Volver</button>
        </div>
    )
}
export default Registro;