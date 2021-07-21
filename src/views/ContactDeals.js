import { Button } from "bootstrap";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";


function ContactDeals(props) {
    const { store, actions } = useContext(AppContext);
    const { contact } = store;
    const { getContact, setNote } = actions;

    const [comment, setComment] = useState("");

    function handlePutNote() {
        setNote(comment, contact.id, contact.user_id);
        setComment("");
        getContact(props.match.params.id);
    }

    let history = useHistory()

    useEffect(() => {
        getContact(props.match.params.id);
        if (sessionStorage.getItem("token") === null) {
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getDeals();
        return () => actions.clearInfo();
    }, []);


    return (
        contact != null ?
            <>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between align-items-center mt-5 my-2">
                        <h2>Tratos {contact.name + " " + contact.last_name}</h2>
                        </div>

                        <ul className="list-group list-group-horizontal my-2">
                            <li className="list-group-item" style={{ width: "7%" }}><b>id: </b>{contact.id}</li>
                            <li className="list-group-item" style={{ width: "25%" }}><b>Nombre: </b>{contact.name + " " + contact.last_name}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Rut: </b>{contact.rut}</li>
                            <li className="list-group-item" style={{ width: "23%" }}><b>Mail: </b>{contact.email}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Teléfono: </b>{contact.phone}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Creado: </b>{contact.create_at}</li>
                        </ul>

                        {contact.deals.slice(0).reverse().map((deal, i) =>
                            <ul className="list-group list-group-horizontal my-5" style={{ minHeight: "85px" }} key={i}>
                                <li className="list-group-item" style={{ width: "18%" }}><b>{"Trato " + deal.id + "(" + deal.create_at + ") "}</b></li>
                                <li className="list-group-item" style={{ width: "16%" }}><b>"Plan:"</b>  {deal.plan}</li>
                                <li className="list-group-item" style={{ width: "18%" }}><b>"Duración:"</b>  {deal.duration}</li>
                                <li className="list-group-item" style={{ width: "48%" }}><b>"Descripción:"</b>  {deal.description}</li>
                            </ul>
                        )}
                        <div className="d-flex flex-row-reverse bd-highlight">
                            <Link className="col-2 btn btn-success my-5 mx-2" to="/crear/trato">Agregar Trato</Link>
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

export default ContactDeals