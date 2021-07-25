import { Button } from "bootstrap";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";


function Notes(props) {
    const { store, actions } = useContext(AppContext);
    const { contact } = store;
    const { getContact, setNote, setEvent } = actions;

    const [comment, setComment] = useState("");
    const [eventComment, setEventComment] = useState("");
    const [date, setDate] = useState("");

    function handlePutEvent() {
        setEvent(eventComment, date, contact.id, contact.user_id);
        setEventComment("");
        setDate("");
        getContact(props.match.params.id);
    }

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
        actions.getEvents();
        actions.getDeals();
        return () => actions.clearInfo();
    }, []);

    return (
        contact != null ?
            <>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 my-2">
                            <h2>Registro</h2>
                        </div>


                        <ul className="list-group list-group-horizontal my-2">
                            <li className="list-group-item" style={{ width: "7%" }}><b>id: </b>{contact.id}</li>
                            <li className="list-group-item" style={{ width: "25%" }}><b>Nombre: </b>{contact.name + " " + contact.last_name}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Rut: </b>{contact.rut}</li>
                            <li className="list-group-item" style={{ width: "23%" }}><b>Mail: </b>{contact.email}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Teléfono: </b>{contact.phone}</li>
                            <li className="list-group-item" style={{ width: "15%" }}><b>Creado: </b>{contact.create_at}</li>
                        </ul>


                        <div className="mt-5 my-2 p-0">
                            <h4>Tratos</h4>
                        </div>
                        {contact.deals.slice(0).reverse().map((deal, i) =>
                            <ul className="list-group list-group-horizontal my-1" style={{ minHeight: "85px" }} key={i}>
                                <li className="list-group-item" style={{ width: "18%" }}><b>{"Trato " + deal.id + "(" + deal.create_at + ") "}</b></li>
                                <li className="list-group-item" style={{ width: "16%" }}><b>"Plan:"</b>  {deal.plan}</li>
                                <li className="list-group-item" style={{ width: "18%" }}><b>"Duración:"</b>  {deal.duration}</li>
                                <li className="list-group-item" style={{ width: "48%" }}><b>"Descripción:"</b>  {deal.description}</li>
                            </ul>
                        )}

                        <div className="mt-5 my-2 p-0">
                            <h4>Eventos</h4>
                        </div>
                        <div className="mt-1 p-0">
                            <label htmlFor="date-event" className="form-label"><b>Nuevo evento</b></label>
                            <input type="date" className="form-control" id="date-event" placeholder={new Date()} style={{width:"33.3%"}} onChange={(event) => setDate(event.target.value)} value={date}/>
                        </div>

                        <div className="mt-1 p-0">
                             <label htmlFor="description-event" className="form-label"><b>Descripción</b></label>
                            <textarea className="form-control" id="description-event" style={{ width: "100%" }} rows="3" onChange={(event) => setEventComment(event.target.value)} value={eventComment}></textarea>
                        </div>

                        <div className="d-flex flex-row-reverse bd-highlight">
                            {eventComment.length > 0 && date !== ""?
                                <button className="col-2 btn btn-success my-2 mx-2" onClick={handlePutEvent}>Agregar evento</button> :
                                <button className="col-2 btn btn-success my-2 mx-2 disabled" onClick={handlePutEvent}>Agregar evento</button>
                            }
                        </div>
                        {contact.events !== null ?
                            contact.events.slice(0).reverse().map((event, i) =>
                                <ul className="list-group list-group-horizontal my-3" key={i}>
                                    <li className="list-group-item" style={{ width: "20%" }}><b>{"Evento " + event.id + "(" + event.date + "):  "}</b></li>
                                    <li className="list-group-item" style={{ width: "80%", minHeight: "100px" }}>{event.comment}</li>
                                </ul>
                            )
                            : ""
                        }


                        <div className="mt-5 my-2 p-0">
                            <h4>Notas</h4>
                        </div>
                        <div className="mt-1 p-0">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Nueva nota</b></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{ width: "100%" }} rows="3" onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight">
                            {comment.length > 0?
                                <button className="col-2 btn btn-success my-2 mb-3 mx-2" onClick={handlePutNote}>Agregar Nota</button> :
                                <button className="col-2 btn btn-success my-2 mb-3 mx-2 disabled" onClick={handlePutNote}>Agregar Nota</button>
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