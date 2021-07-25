import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AppContext } from '../store/appContext';

function EditContact(props) {
    const { store, actions } = useContext(AppContext);
    const { editContact } = actions;
    let history = useHistory();

    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [rut, setRut] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [idUser, setIdUser] = useState(null);
    const [type, setType] = useState("contacto");

    function handleSubmit() {
        editContact(props.match.params.id, name, lastName, rut, type, phone, email, idUser)
        if (type === "Posible") {
            history.push("/posibles");
        } else {
            history.push("/contactos");
        }

    }

    function onSelectUser(event) {
        const selectedIndex = event.target.options.selectedIndex;
        setIdUser(event.target.options[selectedIndex].getAttribute('user-id'));
    }

    useEffect(() => {
        actions.getContact(props.match.params.id)
        if (sessionStorage.getItem("token") === null) {
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getEvents();
        actions.getDeals();
        return () => actions.clearInfo();
    }, []);

    return (
        store.contact !== null ?
            <>
                <div className="container">
                    <div className="row">
                        <h1 className="my-5">Editar Contacto</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-6 my-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" defaultValue={store.contact.name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-md-6 my-3">
                            <label htmlFor="last_name" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="last_name" defaultValue={store.contact.last_name} onChange={(event) => setLastName(event.target.value)} />
                        </div>
                        <div className="col-6 my-3">
                            <label htmlFor="rut" className="form-label">Rut</label>
                            <input type="text" className="form-control" id="rut" defaultValue={store.contact.rut} onChange={(event) => setRut(event.target.value)} />
                        </div>
                        <div className="col-6 my-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="phone" defaultValue={store.contact.phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className="col-6 my-3">
                            <label htmlFor="email" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="email" defaultValue={store.contact.email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-3 my-3">
                            <label for="contact" className="form-label">Usuario</label>
                            <select id="contact" className="form-select" onChange={onSelectUser}>
                                <option disabled selected>Selecciona una opción</option>
                                {store.users.length > 0 ?
                                    store.users.map((user, i) =>
                                        <option key={i} user-id={user.id}>{user.id + ". " + user.name + " " + user.last_name}</option>)
                                    : ""
                                }
                            </select>
                        </div>
                        <div className="col-md-3 my-3">
                            <label htmlFor="type" className="form-label">Tipo</label>
                            <select id="type" className="form-select" onChange={(event) => setType(event.target.value)}>
                                <option>Contacto</option>
                                <option>Posible</option>
                            </select>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight">
                            <button className="col-2 btn btn-success my-5 mx-2" onClick={handleSubmit}>Editar contacto</button>
                            {store.contact.type === "contacto" ?
                                <Link className="col-2 btn btn-danger my-5 mx-2" to="/contactos">Volver</Link> :
                                <Link className="col-2 btn btn-danger my-5 mx-2" to="/posibles">Volver</Link>
                            }
                        </div>
                    </div>
                </div>
            </> :
            <div className="container">
                <div className="row">
                    <h2 className="text-center my-5">Loading</h2>
                </div>
            </div>

    )
}

export default EditContact