import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../style/IngresarUsuario.css";

function Login() {

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    return (
        <div className="container">
            <div className="Login container-fluid">
                <h1 className="Ingresar">Ingresar</h1>
                <input className="Usuario" placeholder="Email" onChange={(e) => {SetEmail(e.target.value);}}></input>
                <input className="Password" placeholder="Contraseña" onChange={(e) => {SetPassword(e.target.value);}}></input>
                <Link to="/BienvenidoVendedor"><button className="Entrar">Ingresar</button></Link>
                <Link className="Registrate" to="/registro">¿Usuario nuevo?</Link>
                <p className="Registrate">Registrate!</p>
                <div>
                <Link className="Idiota" to="/recuperar">Recupera Tu Contraseña</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
