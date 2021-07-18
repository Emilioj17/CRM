import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/CorreosRecibidos.css"
import { Link } from "react-router-dom";
import { BsFillStarFill, BsFillXCircleFill } from 'react-icons/bs'

const CorreosRecibidos = () => {
    const [listaCorreos2, setListaCorreos] = useState([]);
    const [charging, setCharging] = useState(true);
    const [boxEmail, setBoxEmail] = useState(false);
    const [emailSeleccionado, setEmailSeleccionado] = useState([""])
    
    useEffect(() => {
            fetch("http://127.0.0.1:5000/get_message", {
                method: "POST",
                body: JSON.stringify({ "tipo": "is:inbox" })
            }).then(res => {
                if (res.status === 201) return res.json();
            }).then(data => {
                setListaCorreos(data);
                setCharging(false);
            }).catch(error => { console.error("Hay un problemilla: ", error) })
    }, [])

    const Correos = listaCorreos2.map((correo, index) => {
        var para = correo[0].split("@");
        para=para[0]
        var asunto = correo[2].slice(0, 20);
        var resumen = correo[4];

        return (
            <li key={index} id={index} className="p-2 m-2 correoListado" onClick={(e)=>handlerEmail(e)}><span className="estrellaCorreos" id={index}>{<BsFillStarFill />}</span>
                <span className="spanPara" id={index}>Para: {para}</span> <span id={index}>Asunto: {asunto}</span> <span id={index}>Resumen: {resumen}</span></li>
        )
    });

    const CorreoAmpliado = () => {
        if (listaCorreos2[emailSeleccionado] == undefined) {
            return (
                <div></div>
            )
            
        } else if (listaCorreos2[emailSeleccionado] != undefined) {
            const para = listaCorreos2[emailSeleccionado][0]
            const hora = listaCorreos2[emailSeleccionado][1] //Hay que setear la Hora
            const asunto = listaCorreos2[emailSeleccionado][2]
            const cuerpo = listaCorreos2[emailSeleccionado][3] //Hay que decode desde base64 ? deprecado
            return (
                <div className="bodyCuerpoCorreosRecibidosSobre p-5 pb-0 pt-0 fixed-bottom" style={boxEmail ? { display: "" } : { display: "none" }}>
                    <div className="p-5 pt-0">
                        <div className="d-flex flex-row-reverse bd-highlight" onClick={()=>setBoxEmail(false)}><span className="text-danger xdeCorreo"><BsFillXCircleFill/></span></div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <div>
                                <h5>Correo Saliente</h5>
                                <p>De: Me</p>
                                <p>Para: {para}</p>
                            </div>
                            <div className="align-self-start" > {hora} </div>
                        </div>
                        <div>Asunto: {asunto}</div>
                        <div>{cuerpo}</div>
                        <div className="d-flex flex-row-reverse bd-highlight"><button className="btn btn-success m-2 disabled">Respoder</button><button className="btn btn-success m-2 disabled">Reenviar</button></div>
                    </div>
                </div>
            )
        }

    }

    const handlerEmail = (event) => {
        console.log(event.target.id);
        setBoxEmail(true)
        setEmailSeleccionado(event.target.id)
    }

    return (
        <div className="CorreosRecibidos">
            <div className="container">
                <div className="d-flex flex-row-reverse m-2">
                    <Link to="/CorreosRecibidos"><button type="button" className="btn btn-success m-2">Recibidos</button></Link>
                    <Link to="#"><button type="button" className="btn btn-success m-2">Enviados</button></Link>
                    <Link to="/SendEmail"><button type="button" className="btn btn-success m-2">Redactar</button></Link>
                </div>
                <div className="col-12 cuerpoCorreosRecibidos">
                    <CorreoAmpliado />
                    <div className="headCuerpoCorreosRecibidos text-center py-2">
                        <h4>Correos Recibidos</h4>
                    </div>
                    <div className="bodyCuerpoCorreosRecibidos p-2">
                        <div className="text-center" style={charging ? { display: "" } : { display: "none" }}>
                            <div className="spinner-border text-dark" role="status">
                            </div>
                            <div className="sr-only"> Cargando...</div>
                        </div>
                        {Correos}
                    </div>
                    <div className="botonesCorreosRecibidos d-flex flex-row-reverse m-2">
                        <button type="button" className="btn btn-success m-2 disabled">Cargar Más (no disponible)</button>
                    </div>
                </div>
                </div>
            </div>
    );
};
export default CorreosRecibidos;