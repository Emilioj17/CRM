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
        if (store.usuarioActual!= null) {
            // console.log("Hola desde Login useEffect");
            history.push("/BienvenidoVendedor");
        }
    })

    const handlerIngreso = () => {
        actions.getUsuario(usuario);
    }

    return (
        <div className="container">
            <div className="wrap-login100">
                <span className="login100-form-title p-b-43">Ingresar</span>
                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="email" onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}></input>
                    <span className="focus-input100"></span>
                    <span className="label-input100">Email</span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" type="password" name="pass" onChange={(e) => setUsuario({ ...usuario, clave: e.target.value })}></input>
                    <span className="focus-input100"></span>
                    <span className="label-input100">Password</span>
                </div>
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <Link className="txt1" to="/recuperar">¿Olvidaste Tu Contraseña?</Link>
                </div>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={handlerIngreso}>Ingresar</button>
                </div>
                <div className="text-center p-t-46 p-b-20">
                    <Link className="txt2" to="/registro">¿Usuario nuevo?</Link>
                </div>
            </div>
        </div>
    )

}

export default Login

