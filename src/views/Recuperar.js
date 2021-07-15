import React from 'react'
import { MdSecurity } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import '../style/Recuperar.css';

function Recuperar() {
    return (
        <div className="Recuperar container-fluid">
           <i className="Escudo"><MdSecurity /></i>
           <h3 className="Recupera">Recupera Tu Clave</h3>
        <div className="Correo container-fluid">
            <i className="Mail"><HiMail /></i>
        </div>
        <div className="recuperaa">
            <input type="text" placeholder="Ingresa Tu Correo"></input>
        </div>
        </div>
    )
}
export default Recuperar;