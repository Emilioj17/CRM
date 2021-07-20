import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/SendEmail.css"
import { Link, useHistory } from "react-router-dom";
import { AppContext } from '../store/appContext';


const SendEmail = () => {
    const { store, actions } = useContext(AppContext);
    const [email, setEmail] = useState({
        to: "",
        Cc: "",
        subject: "",
        body:""
    });

    const HandlerSend = (e) => {
        e.preventDefault();
        actions.sendEmail(email)
    }

    let history = useHistory()

  useEffect(() => {
      if(sessionStorage.getItem("token") === null){
          history.push('/login')
      }
  },[]);
    

    return (
        <div className="SendEmail">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-2">
                <div className="d-flex flex-row-reverse m-2">
                    <Link to="/CorreosRecibidos"><button type="button" className="btn btn-success m-2">Recibidos</button></Link>
                    <Link to="/CorreosEnviados"><button type="button" className="btn btn-success m-2">Enviados</button></Link>
                    <Link to="#"><button type="button" className="btn btn-success m-2">Redactar</button></Link>
                </div>
                </div>
                <div className="col-12 cuerpoSendEmail">
                    <div className="headCuerpoSendEmail text-center py-2">
                        <h4>Enviar Correo</h4>
                    </div>
                    <div className="bodyCuerpoSendEmail p-2">
                        <div className="row">
                            <div class="col-12 col-md-6">
                                <h6>Para:</h6>
                                <input type="text" class="form-control" placeholder="Correo de Destino" onChange={(e) => setEmail({...email, to: e.target.value})}/>
                            </div>
                            <div class="col-12 col-md-6">
                                <h6>Cc:</h6>
                                <input type="text" class="form-control" placeholder="Correo en Copia (Opcional)" onChange={(e) => setEmail({...email, Cc: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div class="col-12">
                                <h6>Asunto:</h6>
                                <input type="text" class="form-control" placeholder="Asunto de tu Correo" onChange={(e) => setEmail({...email, subject: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div class="col-12">
                                <h6>Mensaje:</h6>
                                <textarea class="form-control" placeholder="Escribe tu mensaje Aquí." rows="8" onChange={(e) => setEmail({...email, body: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <div className="botonesSendEmail d-flex flex-row-reverse m-2">
                        <Link to="/CorreosRecibidos"><button type="button" className="btn btn-danger m-2">Cancelar</button></Link>
                        <button type="button" className="btn btn-success m-2" onClick={HandlerSend}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SendEmail;