import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../style/ModificarUsuario.css";
import { Link } from "react-router-dom";

const ModificarUsuario = () => {

    return (
        <div className="ModificarUsuario mt-4 py-2">
            <div className="container internoModificarUsuario pb-2">
                <div className="d-flex justify-content-between align-items-center m-2 pb-2">
                    <h2>Modificar Usuario</h2>
                    <div>
                        <Link to="/PanelAdministrador"><button type="button" class="btn btn-success m-2">Guardar</button></Link>
                        <Link to="/PanelAdministrador"><button type="button" class="btn btn-danger m-2">Cancelar</button></Link>
                    </div>
                </div>
                <div className="bodyModificarUsuario pb-2">
                    <div className="row m-2 p-2">
                        <div className="fotoModificarUsuario rounded-circle col-2 col-md-1 d-flex align-items-center justify-content-center"> Foto </div>
                        <div className="col-6">
                            <div className="divResumen m-2">Nombre Vendedor</div>
                            <div className="divResumen m-2">Rol Usuario</div>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="divResumen p-1 text-center text-white"><h4>Informacion Sobre Usuarios</h4></div>
                        <div className="p-2">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Area/Departamento</label>
                                    <input type="text" className="form-control" id="last_name"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Rol Usuario</label>
                                    <input type="text" className="form-control" id="rut"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="inputAddress2"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="rut"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Idioma</label>
                                    <input type="text" className="form-control" id="inputAddress2"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Telefono</label>
                                    <input type="text" className="form-control" id="rut"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Fecha de Ingreso</label>
                                    <input type="text" className="form-control" id="inputAddress2"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ModificarUsuario;