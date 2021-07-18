import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../store/appContext";


function Notes(props) {
    const { store, actions } = useContext(AppContext);
    const { contact } = store;
    const { getContact, setNote } = actions;

    const [comment, setComment] = useState(null);

    function handlePutNote(){
        setNote(comment, contact.id, contact.user_id);
        setComment("");
        getContact(props.match.params.id);
    }

    let history = useHistory()

    useEffect(() => {
        getContact(props.match.params.id);
        if(store.token === null){
            history.push('/login')
        }
    }, []);


    return (
        <div className="container">
            <div className="row">
                {
                    contact != null ? (
                        <ul className="list-group list-group-horizontal my-5">
                            <li className="list-group-item" style={{width: "7%"}}><b>id: </b>{contact.id}</li>
                            <li className="list-group-item" style={{width: "25%"}}><b>Nombre: </b>{contact.name + " " + contact.last_name}</li>
                            <li className="list-group-item" style={{width: "15%"}}><b>Rut: </b>{contact.rut}</li>
                            <li className="list-group-item" style={{width: "23%"}}><b>Mail: </b>{contact.email}</li>
                            <li className="list-group-item" style={{width: "15%"}}><b>Teléfono: </b>{contact.phone}</li>
                            <li className="list-group-item" style={{width: "15%"}}><b>Creado: </b>{contact.create_at}</li>
                        </ul>) : ("")
                }
                { contact != null ? (
                    <><div className="mt-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Nueva nota</b></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
                  </div>
                  <button className="col-2 btn btn-success mt-3 mb-5 ms-auto" onClick={handlePutNote}>Agregar nota</button>
                  </>
                ) : ("")}
                { contact != null ? (
                    contact.notes.slice(0).reverse().map((note, i) =>
                    <ul className="list-group list-group-horizontal my-3" key={i}>
                            <li className="list-group-item" style={{width: "17%"}}><b>{"Nota " + note.id + "(" + note.create_at + "):  "}</b></li>
                            <li className="list-group-item" style={{width: "83%", minHeight: "100px"}}>{note.comment}</li>
                    </ul>
                )) : ("")}

            </div>
        </div>
    )

}

export default Notes