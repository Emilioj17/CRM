import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/CorreosEnviados.css"
import { Link } from "react-router-dom";
import { useContext,  useEffect, useState } from 'react';
import { AppContext } from '../store/appContext';

const CorreosEnviados = () => {
    const { store, actions } = useContext(AppContext);
    const [listaCorreos2, setListaCorreos] = useState([null]);
    const listaCorreos = [{ "De": "cOvenn", "Asunto": "Esto es 100% SPAM" },
    { "De": "estebanovic", "Asunto": "Esto es 100% SPAM" },
    { "De": "Matias F", "Asunto": "Esto es 100% SPAM" },
    { "De": "Emilioj17", "Asunto": "Esto es 100% SPAM" },
    { "De": "cOvenn", "Asunto": "Esto es 100% SPAM" },
    { "De": "estebanovic", "Asunto": "Esto es 100% SPAM" },
    { "De": "Matias F", "Asunto": "Esto es 100% SPAM" },
    { "De": "Emilioj17", "Asunto": "Esto es 100% SPAM" }];
    var recibidos
    
    useEffect(() => {
        // actions.getEmail("in:sent")
        // setListaCorreos(store.correo)
            async function hola() {
                recibidos= await actions.getEmail("in:sent")
                setListaCorreos(recibidos)
            };
            hola();
        // }, []);
    },[])

    const handler = () => {
        console.log(listaCorreos2);
    }

    // useEffect(() => {
    //     console.log(listaCorreos);
    // }, [listaCorreos]);

    const Correos = listaCorreos.map((correo, index) => {
        // console.log(correo);
        return (
            <li key={index} className="p-2 m-2">De: {correo[index]} </li>
        )
    });

    return (
        <div className="CorreosEnviados">
            <div className="container">
                <div className="d-flex flex-row-reverse m-2">
                    <Link to="/CorreosRecibidos"><button type="button" className="btn btn-success m-2">Recibidos</button></Link>
                    <Link to="#"><button type="button" className="btn btn-success m-2">Enviados</button></Link>
                    <Link to="/SendEmail"><button type="button" className="btn btn-success m-2">Redactar</button></Link>
                </div>
                <div className="col-12 cuerpoCorreosEnviados">
                    <div className="headCuerpoCorreosEnviados text-center py-2">
                        <h4>Correos Enviados</h4>
                    </div>
                    <div className="bodyCuerpoCorreosEnviados p-2">
                        {Correos}
                    </div>
                    <div className="botonesCorreosEnviados d-flex flex-row-reverse m-2">
                        <button type="button" className="btn btn-success m-2" onClick={handler}>Cargar Más</button>
                    </div>
                </div>
                </div>
            </div>
    );
};
export default CorreosEnviados;