import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/PanelAdministrador.css"

const PanelAdministrador = () => {
    const usuariosInactivos = ["Vendedor 1", "Vendedor 5", "Vendedor 7"]
    const usuariosActivos = ["Vendedor 2", "Vendedor 3", "Vendedor 4", "Vendedor 6", "Vendedor 8"]

    const Inactivos = usuariosInactivos.map((usuario, index) => {
        return (
            <tr>{usuario}</tr>
        )
    });

    const Activos = usuariosActivos.map((usuario, index) => {
        return (
            <li>{usuario}</li>
        )
    });

    return (
        <div className="PanelAdministrador">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Administracion de Usuarios</h2>
                </div>
                <div  className="col-12 col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios Inactivos</th>
                                <th scope="col">Usuarios Activos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <ul>
                                            {Inactivos}
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <ul>
                                            {Activos}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
    );
  };
  export default PanelAdministrador;