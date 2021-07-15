import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../store/appContext';
import "bootstrap/dist/css/bootstrap.css";
import "../style/IngresarUsuario.css";

function Login() {
    const { store, actions } = useContext(AppContext);
    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });
    const history = useHistory();

    useEffect(() => {
        if (store.ingreso=="Correcto") {
            // console.log("Hola desde Login useEffect");
            history.push("/BienvenidoVendedor");
        } else {
            console.log(store.ingreso);
        }
    })

    const handlerIngreso = () => {
        actions.getUsuario(usuario);
    }

    return (
        <div className="container">
            <div className="Login container-fluid">
                <h1 className="Ingresar">Ingresar</h1>
                <input className="Usuario" placeholder="Email" onChange={(e) => setUsuario({...usuario, correo: e.target.value})}></input>
                <input className="Password" placeholder="Contraseña" onChange={(e) => setUsuario({...usuario, clave: e.target.value})}></input>
                <button className="Entrar" onClick={handlerIngreso}>Ingresar</button>
                <Link className="Registrate" to="/registro">¿Usuario nuevo?</Link>
                <p className="Registrate">Registrate!</p>
                <Link className="Idiota" to="/recuperar">Recupera Tu Contraseña</Link>
            </div>
        </div>
    )
}

export default Login
