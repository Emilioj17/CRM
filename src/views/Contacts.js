import { useContext } from 'react'
import { AppContext } from "../store/appContext.js";

function Contact() {
    const { store, actions } = useContext(AppContext);
    const { contacts } = store;

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Contactos</h1>
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
                            <td><button type="button" className="btn btn-secondary mx-1">Notas</button>
                                <button type="button" className="btn btn-secondary mx-1">Tratos</button>
                                <button type="button" className="btn btn-primary mx-1">Editar</button>
                                <button type="button" className="btn btn-danger mx-1">Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            :
            <h2 className="text-center"> - no hay datos -</h2>}
            <button type="button" className="col-2 btn btn-success mx-1 ms-auto">Agregar contacto</button>
        </>
            </div>
        </div>
    )
}

export default Contact
