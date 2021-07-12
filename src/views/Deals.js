import React, { useContext } from 'react'
import { AppContext } from '../store/appContext';

function Deals() {
    const { store, actions } = useContext(AppContext);
    const { deals } = store;

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Tratos</h1>
                <>
        {deals !== null && deals.length > 0 ?
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Creado</th>
                        <th scope="col">Id usuario</th>
                        <th scope="col">Id contacto</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {deals.map((object, i) =>
                        <tr key={i}>
                            <th scope="row">{object.id}</th>
                            <td>{object.plan}</td>
                            <td>{object.duration}</td>
                            <td>{object.description}</td>
                            <td>{object.create_at}</td>
                            <td>{object.user_id}</td>
                            <td>{object.contact_id}</td>
                            <td>
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

export default Deals