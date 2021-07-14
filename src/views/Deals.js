import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../store/appContext';

function Deals() {
    const { store, actions } = useContext(AppContext);
    const { deals } = store;
    const { getDeals, deleteDeal } = actions;

    useEffect(() => {
        getDeals();
    },[]);

    function handleDelete(id){
        deleteDeal(id)
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h2>Bienvenido Vendedor</h2>
                    <div>
                        <Link to="/BienvenidoVendedor"><button type="button" className="btn btn-success m-1">Inicio</button></Link>
                        <Link to="/contactos"><button type="button" className="btn btn-success m-1">Posibles</button></Link>
                        <Link to="/contactos"><button type="button" className="btn btn-success m-1">Contactos</button></Link>
                        <Link to="#"><button type="button" className="btn btn-success m-1">Tratos</button></Link>
                        <Link to="/sendEmail"><button type="button" className="btn btn-success m-1">Correos</button></Link>
                    </div>
                </div>
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
                        <th scope="col">Usuario</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {deals.map((object, i) =>
                        <tr key={i}>
                            <th scope="row">{object.id}</th>
                            <td>{object.plan}</td>
                            <td>{object.duration}</td>
                            <td style={{width: "40%"}}>{object.description}</td>
                            <td>{object.create_at}</td>
                            <td>{object.user_id}</td>
                            <td>{object.contact_id}</td>
                            <td>
                                <Link type="button" className="btn btn-primary mx-1" to={"editar/trato/"+object.id}>Editar</Link>
                                <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(object.id)}>Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            :
            <h2 className="text-center"> - no hay datos -</h2>}
            <Link type="button" className="col-2 btn btn-success mx-1 ms-auto" to="/crear/trato">Agregar Trato</Link>
        </>
            </div>
        </div>
    )
}

export default Deals