import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/CorreosRecibidos.css";
import { Link } from "react-router-dom";

const CorreosRecibidos = () => {
    const listaCorreos = [{ "De": "cOvenn", "Asunto": "Esto es 100% SPAM" },
    { "De": "estebanovic", "Asunto": "Esto es 100% SPAM" },
    { "De": "Matias F", "Asunto": "Esto es 100% SPAM" },
    { "De": "Emilioj17", "Asunto": "Esto es 100% SPAM" },
    { "De": "cOvenn", "Asunto": "Esto es 100% SPAM" },
    { "De": "estebanovic", "Asunto": "Esto es 100% SPAM" },
    { "De": "Matias F", "Asunto": "Esto es 100% SPAM" },
    { "De": "Emilioj17", "Asunto": "Esto es 100% SPAM" }];

    const Correos = listaCorreos.map((correo, index) => {
        console.log(correo);
        return (
            <li key={index} className="p-2 m-2">De: {correo.De}  Asunto: {correo.Asunto}</li>
        )
    });

    return (
        <div className="CorreosRecibidos">
            <div className="container">
                <div className="d-flex flex-row-reverse m-2">
                    <Link to="#"><button type="button" className="btn btn-success m-2">Recibidos</button></Link>
                    <Link to="/CorreosEnviados"><button type="button" className="btn btn-success m-2">Enviados</button></Link>
                    <Link to="/SendEmail"><button type="button" className="btn btn-success m-2">Redactar</button></Link>
                </div>
                <div className="col-12 cuerpoCorreosRecibidos">
                    <div className="headCuerpoCorreosRecibidos text-center py-2">
                        <h4>Correos Recibidos</h4>
                    </div>
                    <div className="bodyCuerpoCorreosRecibidos p-2">
                        {Correos}
                    </div>
                    <div className="botonesCorreosRecibidos d-flex flex-row-reverse m-2">
                        <button type="button" className="btn btn-success m-2">Cargar Más</button>
                    </div>
                </div>
                </div>
            </div>
    );
};
export default CorreosRecibidos;