import React, { useEffect } from 'react'
import "../style/CrearUsuario.css";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';
import {fotoUsuario} from '../img/usuario.png'

const CrearUsuario = () => {
    const { store, actions } = useContext(AppContext);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [rut, setRut] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [type, setType] = useState("Vendedor");
    const history = useHistory();
    const [img, setImg] = useState("#");
    const [imgB64, setImgB64] = useState("#");
    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut: function (rutCompleto) {
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
                return false;
            var tmp = rutCompleto.split('-');
            var digv = tmp[1];
            var rut = tmp[0];
            if (digv == 'K') digv = 'k';
            return (Fn.dv(rut) == digv);
        },
        dv: function (T) {
            var M = 0, S = 1;
            for (; T; T = Math.floor(T / 10))
                S = (S + T % 10 * (9 - M++ % 6)) % 11;
            return S ? S - 1 : 'k';
        }
    };
    const [validacion, setValidacion] = useState(false);
    const [validacionEmail, setValidacionEmail] = useState(false);
    const [validacionClave, setValidacionClave] = useState(false);

    useEffect(() => {
        //  if(sessionStorage.getItem("token") === null){
        //      history.push('/login')
        //  }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getEvents();
        actions.getDeals();
    }, []);
    
    function handleSubmit() {
        actions.setUser(name, lastName, rut, type, phone, email, password, imgB64)
        history.push("/PanelAdministrador");
    }

    function encodeImageFileAsURL(event) {
        const imgInp = event.target.files[0]
        if (imgInp){
            setImg(URL.createObjectURL(imgInp))
        }
        const reader = new FileReader();
        reader.onloadend = function () {
            setImgB64(reader.result)
            // console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(imgInp);
    }
    
    const validarRut = (event) => {
        const rut = event.target.value;
        if (Fn.validaRut(rut)) {
            setRut(rut);
            setValidacion(false);
            return;
        } else {
            setValidacion(true);
            return;
        }
    }

    const validarEmail = (event) => {
        const email = event.target.value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            setEmail(event.target.value);
            setValidacionEmail(false);
            return;
        } else {
            setValidacionEmail(true);
            return;
        }
    }

    const validarClave = (event) => {
        let clave = event.target.value;
        clave = clave.toString();
        if (clave.length > 4) {
            setPassword(clave);
            setValidacionClave(false);
            return;
        } else {
            setValidacionClave(true);
            return;
        }
    }

    return (
        <div className="CrearUsuario py-2">
            <div className="container internoCrearUsuario pb-2">
                <div className="d-flex justify-content-between align-items-center m-2 pb-2">
                    <h2>Crear Usuario</h2>
                    <div>
                        <button type="button" className="btn btn-primary m-2" onClick={handleSubmit}>Guardar</button>
                        <Link to="/PanelAdministrador"><button type="button" className="btn btn-danger m-2">Cancelar</button></Link>
                    </div>
                </div>
                <div className="bodyCrearUsuario pb-2">
                    <div className="row m-2 p-2">
                        <div className="fotoCrearUsuario rounded-circle col-2 col-md-1 d-flex align-items-center justify-content-center"> <img src={img} alt="Foto Perfil" /> </div>
                        <div className="col-8">
                            <div className="divResumen m-2"><input type="file" name="" id="" accept="image/*" onChange={encodeImageFileAsURL}/></div>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="divResumen p-1 text-center text-white"><h4>Informacion Sobre Usuarios</h4></div>
                        <div className="p-2">
                            <form className="row g-3">
                                {validacionClave ? (<div className="alert alert-danger">Tu clave debe tener más de 4 carácteres.</div>) : null}
                                {validacion ? (<div className="alert alert-danger">Por favor, revisa tu Rut. Nos parece incorrecto.</div>) : null}
                                {validacionEmail? (<div className="alert alert-danger">Por favor, revisa tu Email. Nos parece incorrecto.</div>):null}
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" onChange={(event) => setName(event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="last_name" onChange={(event) => setLastName(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Rut</label>
                                    <input type="text" className="form-control" id="rut" placeholder="11111111-1" onChange={(event) => validarRut(event)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phone" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="phone" onChange={(event) => setPhone(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="email" placeholder="prueba@prueba.com" onChange={(event) => validarEmail(event)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="password" className="form-label">Clave</label>
                                    <input type="text" className="form-control" id="password" placeholder="Más de 4 caracteres" onChange={(event) => validarClave(event)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="admin" className="form-label">Rol de Usuario</label>
                                    <select id="admin" className="form-select" onChange={(event) => setType(event.target.value)}>
                                        <option defaultValue>Vendedor</option>
                                        <option>Administrador</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CrearUsuario;