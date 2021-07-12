import React from 'react'

function CreateContact() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Crear Contacto</h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="last_name" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="last_name"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="rut" className="form-label">Rut</label>
                        <input type="text" className="form-control" id="rut"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddress2" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="inputAddress2"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="user_id" className="form-label">Id usuario</label>
                        <input type="number" className="form-control" id="user_id" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="type" className="form-label">Tipo</label>
                        <select id="type" className="form-select">
                            <option defaultValue>Posible</option>
                            <option>Contacto</option>
                        </select>
                    </div>
                    <div className="col-12 d-flex">
                        <button type="button" className="col-2 btn btn-success mx-1 ms-auto">Crear contacto</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateContact