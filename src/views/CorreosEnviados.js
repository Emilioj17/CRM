import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/CorreosEnviados.css"
import { Link, useHistory } from "react-router-dom";
import { BsFillStarFill, BsXSquare } from 'react-icons/bs'
import { AppContext } from "../store/appContext";
import { decode } from 'js-base64';

const CorreosEnviados = () => {
    const { store } = useContext(AppContext);
    const [listaCorreos2, setListaCorreos] = useState([]);
    const [charging, setCharging] = useState(true);
    const [boxEmail, setBoxEmail] = useState(false);
    const [emailSeleccionado, setEmailSeleccionado] = useState([""])
    
    useEffect(() => {
            fetch("http://127.0.0.1:5000/get_message", {
                method: "POST",
                body: JSON.stringify({ "tipo": "in:sent" })
            }).then(res => {
                if (res.status === 201) return res.json();
            }).then(data => {
                setListaCorreos(data);
                setCharging(false);
            }).catch(error => { console.error("Hay un problemilla: ", error) })
    }, [])

    const Correos = listaCorreos2.map((correo, index) => {
        var para = correo[0]
        var asunto = correo[2].slice(0, 20);
        var resumen = correo[4];

        return (
            <li key={index} id={index} className="p-2 m-2 correoListado" onClick={(e)=>handlerEmail(e)}><span className="estrellaCorreos" id={index}>{<BsFillStarFill />}</span>
                <span className="spanPara" id={index}>De: {para}</span> <span id={index}>Asunto: {asunto}</span> <span id={index}>{resumen}</span></li>
        )
    });

    const CorreoAmpliado = () => {
        if (listaCorreos2[emailSeleccionado] === undefined) {
            return (
                <div></div>
            )
            
        } else if (listaCorreos2[emailSeleccionado] !== undefined) {
            const para = listaCorreos2[emailSeleccionado][0]
            const hora = listaCorreos2[emailSeleccionado][1].slice(0, listaCorreos2[emailSeleccionado][1].length -5)
            const asunto = listaCorreos2[emailSeleccionado][2]
            const cuerpo = decode(listaCorreos2[emailSeleccionado][3]) //Hay que decode desde base64 ? deprecado. Código trae tags que entorpece lectura.
            return (
                <div className="bodyCuerpoCorreosEnviadosSobre fixed-bottom p-0" style={boxEmail ? { display: "" } : { display: "none" }}>
                    <div className="p-1 pt-0">
                        <div className="d-flex justify-content-between align-items-start correoPrimero">
                            <div className="p-2">
                                <p>De: Me</p>
                                <p>Para: {para}</p>
                            </div>
                            <div className="text-danger xdeCorreo" onClick={()=>setBoxEmail(false)}><BsXSquare/></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-2 correoSegundo">
                            <div>
                                <div>Asunto: {asunto}</div>
                            </div>
                            <div> {hora} </div>
                        </div>
                        <iframe className="iframeCorreo correoTercero" srcdoc={`${cuerpo}`} frameborder="0"></iframe>
                        <div className="d-flex flex-row-reverse bd-highlight correoCuarto"><button className="btn btn-success m-2 disabled">Respoder</button><button className="btn btn-success m-2 disabled">Reenviar</button></div>
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

    let history = useHistory()

    useEffect(() => {
        if(sessionStorage.getItem("token") === null){
            history.push('/login')
        }
    },[]);

    return (
        <div className="CorreosEnviados">
            <div className="container">
                <div className="d-flex flex-row-reverse m-2 p-2">
                    <Link to="/CorreosRecibidos"><button type="button" className="btn btn-primary m-2">Recibidos</button></Link>
                    <button type="button" className="btn btn-primary m-2 disabled">Enviados</button>
                    <Link to="/SendEmail"><button type="button" className="btn btn-primary m-2">Redactar</button></Link>
                </div>
                <div className="col-12 cuerpoCorreosEnviados">
                    <CorreoAmpliado />
                    <div className="headCuerpoCorreosEnviados text-center py-2">
                        <h4>Correos Enviados</h4>
                    </div>
                    <div className="bodyCuerpoCorreosEnviados p-2">
                        <div className="text-center my-5" style={charging ? { display: "" } : { display: "none" }}>
                            <div className="spinner-border text-dark" role="status">
                            </div>
                            <div className="sr-only"> Cargando...</div>
                        </div>
                        {Correos}
                    </div>
                    <div className="botonesCorreosEnviados d-flex flex-row-reverse m-2">
                        <button type="button" className="btn btn-primary m-2 disabled">Cargar Más (no disponible)</button>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default CorreosEnviados;