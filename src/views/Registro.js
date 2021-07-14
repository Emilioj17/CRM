import React from 'react'
import '../style/Registro.css';
import "bootstrap/dist/css/bootstrap.css";

function Registro() {
    return (
        <div className="Registro">
            <h1 className="Registrate">Registrate</h1>
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