import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../store/appContext';
import "../style/IngresarUsuario.css";

function Login() {
    const { store, actions } = useContext(AppContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (store.usuarioActual != null) {
            history.push("/BienvenidoVendedor");
        }
    })

    function handleingreso(e) {
        e.preventDefault();
        actions.getUsuario(email, password);
    }

    return (
        <div className="container">
            <div className="row my-5">
                <form className="my-5 login" onSubmit={(e) => handleingreso(e)} >
                <h1 className="text-center">Ingresar</h1>
                    <div className="mb-3">
                        <label for="name" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="name" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="last_name" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="last_name" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="text-center my-3">
                        <Link className="txt1" to="/recuperar">¿Olvidaste Tu Contraseña?</Link>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                    <div className="text-center my-3">
                        <Link className="txt2" to="/registro">¿Usuario nuevo?</Link>
                    </div>

                </form>
            </div>
        </div>
    )

    // const handlerIngreso = () => {
    //     actions.getUsuario(email, password);
    // }

    // return (
    //     <div className="container">
    //         <div className="wrap-login100">
    //             <span className="login100-form-title p-b-43">Ingresar</span>
    //             <div className="wrap-input100 validate-input">
    //                 <input className="input100" type="text" name="email" onChange={(event) => setEmail(event.target.value)}></input>
    //                 <span className="focus-input100"></span>
    //                 <span className="label-input100">Email</span>
    //             </div>
    //             <div className="wrap-input100 validate-input">
    //                 <input className="input100" type="password" name="pass" onChange={(event) => setPassword(event.target.value)}></input>
    //                 <span className="focus-input100"></span>
    //                 <span className="label-input100">Password</span>
    //             </div>
    //             <div className="flex-sb-m w-full p-t-3 p-b-32">
    //                 <Link className="txt1" to="/recuperar">¿Olvidaste Tu Contraseña?</Link>
    //             </div>
    //             <div className="container-login100-form-btn">
    //                 <button className="login100-form-btn" onClick={handlerIngreso}>Ingresar</button>
    //             </div>
    //             <div className="text-center p-t-46 p-b-20">
    //                 <Link className="txt2" to="/registro">¿Usuario nuevo?</Link>
    //             </div>
    //         </div>
    //     </div>
    // )


}

export default Login

