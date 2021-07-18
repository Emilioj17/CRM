import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/CorreosEnviados.css"
import { Link } from "react-router-dom";
import { BsFillStarFill, BsFillXCircleFill } from 'react-icons/bs'

const CorreosEnviados = () => {
    const [listaCorreos2, setListaCorreos] = useState([]);
    const [charging, setCharging] = useState(true);
    const [boxEmail, setBoxEmail] = useState(false);
    const [emailSeleccionado, setEmailSeleccionado] = useState(null)
    
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
        var para = correo[0].split("@");
        para=para[0]
        var asunto = correo[2].slice(0, 20);

        return (
            <li key={index} id={index} className="p-2 m-2 correoListado" onClick={(e)=>handlerEmail(e)}><span className="estrellaCorreos" id={index}>{<BsFillStarFill />}</span>
                <span className="spanPara" id={index}>Para: {para}</span> <span id={index}>Asunto: {asunto}</span> <span id={index}>Resumen: {correo[4]}</span></li>
        )
    });

    const CorreoAmpliado = () => {
        return (
            <div className="bodyCuerpoCorreosEnviadosSobre p-2" style={boxEmail ? { display: "" } : { display: "none" }}>
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h2>Correo Entrante: {listaCorreos2[emailSeleccionado][0]}</h2>
                    <div onClick={()=>setBoxEmail(false)}><BsFillXCircleFill/></div>
                </div>
                <div>Lorem {listaCorreos2[emailSeleccionado][0]}ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur odit non, sed eveniet optio corrupti voluptate fugiat architecto officiis quisquam labore libero eaque nostrum qui quas consequatur explicabo neque.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit ea, unde, perferendis molestiae eligendi asperiores in id voluptatum, quam corrupti sit sunt veritatis laudantium dicta totam quod repudiandae et.</div>
            </div>
        )
    }

    const handlerEmail = (event) => {
        console.log(event.target.id);
        setBoxEmail(true)
        setEmailSeleccionado(event.target.id)
    }

    return (
        <div className="CorreosEnviados">
            <div className="container">
                <div className="d-flex flex-row-reverse m-2">
                    <Link to="/CorreosRecibidos"><button type="button" className="btn btn-success m-2">Recibidos</button></Link>
                    <Link to="#"><button type="button" className="btn btn-success m-2">Enviados</button></Link>
                    <Link to="/SendEmail"><button type="button" className="btn btn-success m-2">Redactar</button></Link>
                </div>
                <div className="col-12 cuerpoCorreosEnviados">
                    <CorreoAmpliado />
                    <div className="headCuerpoCorreosEnviados text-center py-2">
                        <h4>Correos Enviados</h4>
                    </div>
                    <div className="bodyCuerpoCorreosEnviados p-2">
                        <div className="text-center" style={charging ? { display: "" } : { display: "none" }}>
                            <div className="spinner-border text-dark" role="status">
                            </div>
                            <div className="sr-only"> Cargando...</div>
                        </div>
                        {Correos}
                    </div>
                    <div className="botonesCorreosEnviados d-flex flex-row-reverse m-2">
                        <button type="button" className="btn btn-success m-2 disabled">Cargar Más (no disponible)</button>
                    </div>
                </div>
                </div>
            </div>
    );
};
export default CorreosEnviados;