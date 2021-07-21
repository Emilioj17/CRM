import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../style/ModificarUsuario.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';

const ModificarUsuario = () => {
    const { store, actions } = useContext(AppContext);
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        rut: "",
        tipo: "",
        estado: "",
        imgB64: ""
    });
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [rut, setRut] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [type, setType] = useState(null);
    const [estado, setEstado] = useState(null);
    const [img, setImg] = useState("#");
    const [imgB64, setImgB64] = useState("#")
    let history = useHistory();

    useEffect(() => {
        const id = store.userId;
        fetch("http://localhost:5000/api/users/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then((data) => {
                setUsuario({
                    nombre: data.name,
                    apellido: data.last_name,
                    telefono: data.phone,
                    correo: data.email,
                    rut: data.rut,
                    tipo: data.type,
                    estado: data.estado,
                    imgB64: data.imgB64
                })
            })
            .catch(err => (console.error(err)));
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getDeals();
    }, []);


    function handleSubmit() {
        console.log(usuario.nombre);
        const idx = store.userId
        actions.editUser(idx, name, lastName, rut, type, estado, phone, email, imgB64)
        history.push("/PanelAdministrador");
    }

    const HandlerBorrarUsuario = () => {
        actions.deleteUser(store.userId);
        history.push("/PanelAdministrador");
    }

    function encodeImageFileAsURL(event) {
        const imgInp = event.target.files[0]
        if (imgInp) {
            setImg(URL.createObjectURL(imgInp))
        }
        const reader = new FileReader();
        reader.onloadend = function () {
            setImgB64(reader.result)
            console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(imgInp);
    }

    return (
        <div className="ModificarUsuario py-2">
            <div className="container internoModificarUsuario pb-2">
                <div className="d-flex justify-content-between align-items-center m-2 pb-2">
                    <h2>Modificar Usuario</h2>
                    <div>
                        <button type="button" className="btn btn-success m-2" onClick={handleSubmit}>Guardar</button>
                        <button type="button" className="btn btn-danger mx-3" onClick={HandlerBorrarUsuario}>Borrar</button>
                        <Link to="/PanelAdministrador"><button type="button" className="btn btn-warning m-2">Cancelar</button></Link>
                    </div>
                </div>
                <div className="bodyModificarUsuario pb-2">
                    <div className="row m-2 p-2">
                        <div className="fotoModificarUsuario rounded-circle col-2 col-md-1 d-flex align-items-center justify-content-center"> <img src={usuario.imgB64} alt="Foto Perfil" /> </div>
                        <div className="col-6">
                            <div className="divResumen m-2"><input type="file" name="" id="" accept="image/*" onChange={encodeImageFileAsURL} /></div>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="divResumen p-1 text-center text-white"><h4>Informacion Sobre Usuarios</h4></div>
                        <div className="p-2">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" onChange={(event) => setName(event.target.value)} placeholder={usuario.nombre} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="last_name" onChange={(event) => setLastName(event.target.value)} placeholder={usuario.apellido} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Rut</label>
                                    <input type="text" className="form-control" id="rut" onChange={(event) => setRut(event.target.value)} placeholder={usuario.rut} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phone" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="phone" onChange={(event) => setPhone(event.target.value)} placeholder={usuario.telefono} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)} placeholder={usuario.correo} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="estado" className="form-label">Estado de Usuario</label>
                                    <select id="estado" className="form-select" onChange={(event) => setEstado(event.target.value)} placeholder={usuario.estado}>
                                        <option selected={usuario.tipo === "Activo" ? "selected" : ""}>Activo</option>
                                        <option selected={usuario.tipo === "Inactivo" ? "selected" : ""}>Inactivo</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="admin" className="form-label">Rol de Usuario</label>
                                    <select id="admin" className="form-select" onChange={(event) => setType(event.target.value)} placeholder={usuario.tipo}>
                                        <option selected={usuario.tipo === "Vendedor" ? "selected" : ""}>Vendedor</option>
                                        <option selected={usuario.tipo === "Administrador" ? "selected" : ""}>Administrador</option>
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

export default ModificarUsuario;