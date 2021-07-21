import { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from "../store/appContext.js";

function Contact() {
    const { store, actions } = useContext(AppContext);
    const { contacts } = store;
    const { getContacts, deleteContact } = actions;
    let history = useHistory()

    useEffect(() => {
        if(sessionStorage.getItem("token") === null){
            history.push('/login')
        }
        getContacts();
    },[]);

    function handleDelete(id){
        deleteContact(id)
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center my-2 mt-5 my-2">
                    <h2>Contactos</h2>
                </div>
        
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Rut</th>
                            <th scope="col">mail</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Creado</th>
                            <th scope="col">Id usuario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.contacts != null ? 
                        contacts.filter(contact => contact.type !== "Posible") !== null && contacts.filter(contact => contact.type !== "Posible").length > 0 ?
                        contacts.filter(contact => contact.type !== "Posible").map((object, i) =>
                            <tr key={i}>
                                <th scope="row">{object.id}</th>
                                <td>{object.name}</td>
                                <td>{object.last_name}</td>
                                <td>{object.rut}</td>
                                <td>{object.email}</td>
                                <td>{object.phone}</td>
                                <td>{object.create_at}</td>
                                <td>{object.user_id}</td>
                                <td><Link type="button" className="btn btn-secondary mx-1" to={"/contactos/" + object.id +"/notas"}>Notas</Link>
                                <Link type="button" className="btn btn-secondary mx-1" to={"/contactos/" + object.id +"/tratos"}>Tratos</Link>
                                    <Link type="button" className="btn btn-primary mx-1" to={"/editar/contacto/" + object.id}>Editar</Link>
                                    <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(object.id)}>Eliminar</button></td>
                            </tr>
                        )
                        :
                        <td colspan="9" style={{height:"100px", padding:"20px"}}><h2 className="text-center"> - no hay datos -</h2></td>
                    : <td colspan="9" style={{height:"100px", padding:"20px"}}><h2 className="text-center"> - no hay datos -</h2></td>}
                    </tbody>
                </table>

            <div className="d-flex flex-row-reverse bd-highlight">
                <Link className="col-2 btn btn-success my-5 mx-2" to="crear/contacto">Agregar contacto</Link>
                <Link className="col-2 btn btn-danger my-5 mx-2" to="/BienvenidoVendedor">Atras</Link>
            </div>
            </div>
        </div>
    )
}

export default Contact
