import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../style/IngresarUsuario.css";

function Login() {

    const [user, SetUser] = useState("")
    const [password, SetPassword] = useState("")
    return (
        <div className="IngresarUsuario">
            <div className="container">
                <h1 className="Ingresar">Ingresar</h1>
                <input className="Usuario" placeholder="Usuario" onChange={(e) => {SetUser(e.target.value);}}></input>
                <input className="Password" placeholder="Contraseña" onChange={(e) => {SetPassword(e.target.value);}}></input>
                <button className="Entrar">Ingresar</button>
                <Link className="Registrate" to="/registro">¿Usuario nuevo?</Link>
            </div>
            <p className="Registrate">Registrate!</p>
        </div>
    )
}

export default Login
