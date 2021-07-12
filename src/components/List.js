import { useEffect, useState } from "react";


function List(props) {


    return (
        <>
        {props.objects !== null && props.objects.length > 0 ?
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Rut</th>
                        <th scope="col">mail</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Creado</th>
                        <th scope="col">Id usuario</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {props.objects.map((object, i) =>
                        <tr key={i}>
                            <th scope="row">{object.id}</th>
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
    );
}

export default List;