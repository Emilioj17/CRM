import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';

function CreateDeal() {
    const { store, actions } = useContext(AppContext);
    const { contacts, users } = store;
    const { setDeal } = actions;
    let history = useHistory();

    const [plan, setPlan] = useState(null);
    const [duration, setDuration] = useState(null);
    const [description, setDescription] = useState(null);
    const [contactId, setContactId] = useState(null);
    const [userId, setUserId] = useState(null);

    function onSelectContact(event) {
        const selectedIndex = event.target.options.selectedIndex;
        setContactId(event.target.options[selectedIndex].getAttribute('contact-id'));
    }

    function onSelectUser(event) {
        const selectedIndex = event.target.options.selectedIndex;
        setUserId(event.target.options[selectedIndex].getAttribute('user-id'));
    }

    function handleSubmit(){
        setDeal(plan, duration, description, contactId, userId)
        history.push("/tratos");
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Crear Trato</h1>
                <div className="d-flex flex-column align-items-center">
                    <div className="col-6 my-3">
                        <label for="plan" className="form-label">Plan</label>
                        <select id="contact" className="form-select" onChange={(event) => setPlan(event.target.value)}>
                            <option disabled selected>Selecciona una opción</option>
                            <option >Plan 1</option>
                            <option >Plan 2</option>
                            <option >Plan 3</option>
                            <option >Plan 4</option>
                        </select>
                    </div>
                    <div className="col-6 my-3">
                        <label for="plan" className="form-label">Duración</label>
                        <select id="contact" className="form-select" onChange={(event) => setDuration(event.target.value)}>
                            <option disabled selected>Selecciona una opción</option>
                            <option >Mensual</option>
                            <option >Trimestral</option>
                            <option >Semestral</option>
                            <option >Anual</option>
                        </select>
                    </div>
                    <div className="col-6 my-3">
                        <label for="contact" className="form-label">Contacto</label>
                        <select id="contact" className="form-select" onChange={onSelectContact}>
                            <option disabled selected>Selecciona una opción</option>
                            {contacts !== null && contacts.length > 0 ?
                                contacts.map((contact, i) =>
                                    <option key={i} contact-id={contact.id}>{contact.id + ". " + contact.name + " " + contact.last_name}</option>)
                                : ""
                            }
                        </select>
                    </div>
                    <div className="col-6 my-3">
                        <label for="contact" className="form-label">Usuario</label>
                        <select id="contact" className="form-select" onChange={onSelectUser}>
                            <option disabled selected>Selecciona una opción</option>
                            {users !== null && users.length > 0 ?
                                users.map((user, i) =>
                                    <option key={i} user-id={user.id}>{user.id + ". " + user.name + " " + user.last_name}</option>)
                                : ""
                            }
                        </select>
                    </div>
                    <div className="col-6 my-3">
                        <label for="description">Descripción</label>
                        <textarea className="form-control" id="description" rows="3"onChange={(event) => setDescription(event.target.value)}></textarea>
                    </div>
                </div>

                <div className="col-12 d-flex">
                    <button className="col-2 btn btn-success my-5 ms-auto" onClick={handleSubmit}>Crear trato</button>
                </div>
            </div>
        </div>
    )
}


export default CreateDeal