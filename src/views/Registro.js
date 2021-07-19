import React, { useContext, useEffect, useState } from 'react'
// import '../style/Registro.css';
import "bootstrap/dist/css/bootstrap.css";
import { AppContext } from '../store/appContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Registro() {
    const { store, actions } = useContext(AppContext);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [rut, setRut] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        actions.crearUsuario(name, lastName, rut, "Vendedor", phone, email, password);
    }

    useEffect(() => {
        if(store.token != null){
            history.push("/bienvenidovendedor")
        }
    })

    return (
        <div className="container">
            <div className="row my-5">
                    <form className="my-5" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="text-center">Registro</h1>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="last_name" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="last_name" onChange={(event) => setLastName(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="rut" className="form-label">Rut</label>
                        <input type="text" className="form-control" id="rut" onChange={(event) => setRut(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="phone" onChange={(event) => setPhone(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                    <div className="text-center my-3">
                        <Link className="txt2" to="/login">volver</Link>
                    </div>
                </form>
                
            </div>
        </div >
    )
}
export default Registro;