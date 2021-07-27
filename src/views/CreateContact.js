import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';
import { Link } from 'react-router-dom';

function CreateContact() {
    const { store, actions } = useContext(AppContext);
    const { setContact } = actions;
    let history = useHistory();

    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [rut, setRut] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    // const [idUser, setIdUser] = useState(null);
    const [type, setType] = useState("Posible");

    function handleSubmit() {
        setContact(name, lastName, rut, type, phone, email, store.usuarioActual.id)
        history.push("/contactos");
    }

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getEvents();
        actions.getDeals();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Crear Contacto</h1>
                <div className="col-md-6 my-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="col-md-6 my-3">
                    <label htmlFor="last_name" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="last_name" onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className="col-6 my-3">
                    <label htmlFor="rut" className="form-label">Rut</label>
                    <input type="text" className="form-control" id="rut" onChange={(event) => setRut(event.target.value)} />
                </div>
                <div className="col-6 my-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="phone" onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className="col-6 my-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                {/* <div className="col-md-3 my-3">
                        <label htmlFor="user_id" className="form-label">Id usuario</label>
                        <input type="number" className="form-control" id="user_id" onChange={(event) => setIdUser(event.target.value)}/>
                    </div> */}
                <div className="col-md-3 my-3">
                    <label htmlFor="type" className="form-label">Tipo</label>
                    <select id="type" className="form-select" onChange={(event) => setType(event.target.value)}>
                        <option defaultValue>Posible</option>
                        <option>Contacto</option>
                    </select>
                </div>
                <div className="col-12 d-flex flex-row-reverse bd-highlight">
                    <button className="col-2 btn btn-primary my-5 xm-2" onClick={handleSubmit}>Crear contacto</button>
                    <Link className="col-2 btn btn-danger my-5 mx-2" to="/contactos">Atras</Link>
                </div>
            </div>
        </div>
    )
}

export default CreateContact