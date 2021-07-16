import React from 'react'
import { MdSecurity } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import '../style/Recuperar.css';

function Recuperar() {
    return (
        <div className="Recuperar container-fluid">
            <div className="container-fluid">
              <div className="row">
                  <MdSecurity />
              </div>
            </div>
           <h3 className="Recupera">Recupera Tu Clave</h3>
        <div className="Correo container-fluid">
            <div className="Mail col-md-5">
                <HiMail />
                <input type="text" placeholder="Ingresa Tu Correo"></input>
            </div>
        </div>
        </div>
    )
}
export default Recuperar;