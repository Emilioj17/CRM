import React, { useState, useContext,useEffect } from 'react';
import { MdSecurity } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import '../style/Recuperar.css';
import { AppContext } from '../store/appContext';


function Recuperar() {
    
    const { store, actions } = useContext(AppContext);
    const [email, setEmail] = useState ({
        to: "",
        Cc: " Recupera Tu Contraseña",
        subject: " Recupera Tu Contraseña ",
        body: " Tu Contraseña es: "
    });

    const HandlerSend = (e) => {
        e.preventDefault();
        actions.sendEmailRecovery(email)
    }


    return (
        <div className="Recuperar container-fluid">
            <div className="container-fluid">
              <div className="row-secured">
                  <MdSecurity />
              </div>
            </div>
           <h3 className="Recupera">Recupera Tu Clave</h3>
        <div className="Correo container-fluid">
            <div className="Mail col-md-5">
                <HiMail />
            </div>
                <div className="Input col-md-7">
                <input  type="text" placeholder="Ingresa Tu Correo" onChange={(e) => setEmail({...email, to: e.target.value})}></input>
                <button className="button-recuperar" type="button" onClick={HandlerSend}>Recuperar</button>
                </div>
        </div>
        </div>
    )
}
export default Recuperar;