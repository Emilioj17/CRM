import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from "../store/appContext.js";

function Contact() {
    const { store, actions } = useContext(AppContext);
    const { contacts } = store;
    const { getContacts, deleteContact } = actions;

    useEffect(() => {
        getContacts();
    },[]);

    function handleDelete(id){
        deleteContact(id)
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h2>Bienvenido Vendedor</h2>
                    <div>
                        <Link to="/BienvenidoVendedor"><button type="button" className="btn btn-success m-1">Inicio</button></Link>
                        <Link to="#"><button type="button" className="btn btn-success m-1">Posibles</button></Link>
                        <Link to="#"><button type="button" className="btn btn-success m-1">Contactos</button></Link>
                        <Link to="/tratos"><button type="button" className="btn btn-success m-1">Tratos</button></Link>
                        <Link to="/sendEmail"><button type="button" className="btn btn-success m-1">Correos</button></Link>
                    </div>
                </div>
                <>
        {contacts !== null && contacts.length > 0 ?
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tipo</th>
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

                    {contacts.map((object, i) =>
                        <tr key={i}>
                            <th scope="row">{object.id}</th>
                            <td>{object.type}</td>
                            <td>{object.name}</td>
                            <td>{object.last_name}</td>
                            <td>{object.rut}</td>
                            <td>{object.email}</td>
                            <td>{object.phone}</td>
                            <td>{object.create_at}</td>
                            <td>{object.user_id}</td>
                            <td><Link type="button" className="btn btn-secondary mx-1" to={"/contactos/"+object.id}>Notas</Link>
                                <button type="button" className="btn btn-secondary mx-1">Tratos</button>
                                <Link type="button" className="btn btn-primary mx-1" to={"/editar/contacto/"+object.id}>Editar</Link>
                                <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(object.id)}>Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            :
            <h2 className="text-center"> - no hay datos -</h2>}
            <Link  className="col-2 btn btn-success my-5 ms-auto" to="crear/contacto">Agregar contacto</Link>
        </>
            </div>
        </div>
    )
}

export default Contact
