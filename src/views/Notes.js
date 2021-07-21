import { Button } from "bootstrap";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";


function Notes(props) {
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
                            <h2>Notas {contact.name + " " + contact.last_name}</h2>
                        </div>

                        <ul className="list-group list-group-horizontal my-2">
                            <li className="list-group-item" style={{ width: "7%" }}><b>id: </b>{contact.id}</li>
                            <li className="list-group-item" style={{ width: "25%" }}><b>Nombre: </b>{contact.name + " " + contact.last_name}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Rut: </b>{contact.rut}</li>
                            <li className="list-group-item" style={{ width: "23%" }}><b>Mail: </b>{contact.email}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Teléfono: </b>{contact.phone}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Creado: </b>{contact.create_at}</li>
                        </ul>

                        <div className="mt-5 p-0">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Nueva nota</b></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{ width: "100%" }} rows="3" onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight">
                            {comment.length > 0 ?
                                <button className="col-2 btn btn-success my-5 mx-2" onClick={handlePutNote}>Agregar Nota</button> :
                                <button className="col-2 btn btn-success my-5 mx-2 disabled" onClick={handlePutNote}>Agregar Nota</button>
                            }
                            {store.contact.type === "contacto" ?
                                <Link className="col-2 btn btn-danger my-5 mx-2" to="/contactos">Volver</Link> :
                                <Link className="col-2 btn btn-danger my-5 mx-2" to="/posibles">Volver</Link>
                            }
                        </div>
                        {contact.notes.slice(0).reverse().map((note, i) =>
                            <ul className="list-group list-group-horizontal my-3" key={i}>
                                <li className="list-group-item" style={{ width: "17%" }}><b>{"Nota " + note.id + "(" + note.create_at + "):  "}</b></li>
                                <li className="list-group-item" style={{ width: "83%", minHeight: "100px" }}>{note.comment}</li>
                            </ul>
                        )}


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

export default Notes