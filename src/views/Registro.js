import React, { useState } from 'react'
import '../style/Registro.css';
import "bootstrap/dist/css/bootstrap.css";

function Registro() {

  const [nameReg, SetNameReg] = useState("")
  const [lastnameReg, SetLastnameReg] = useState("")
  const [phoneReg, SetPhoneReg] = useState("")
  const [emailReg, SetEmailReg] = useState("")
  const [passwordReg, SetPasswordReg] = useState("")


    return (
        <div className="Registro container-fluid">
            <h1 className="Registrate">Registrate</h1>
            <form>
            <input className="Nombre" type="text" placeholder="Nombre" onChange={(e) => {SetNameReg(e.target.value);}}></input>
            <input className="Apellido" type="text" placeholder="Apellido" onChange={(e) => {SetLastnameReg(e.target.value);}}></input>
            <input className="Telefono" type="" placeholder="Telefono" onChange={(e) => {SetPhoneReg(e.target.value);}}></input>
            <input className="Correo" placeholder="Correo" onChange={(e) => {SetEmailReg(e.target.value);}}></input>
            <input className="CrearPassword" type="password" placeholder="Contraseña" onChange={(e) => {SetPasswordReg(e.target.value);}}></input>
            </form>
            <div>
            <button className="btn btn-lg btn-success btn-block" type="submit" value="Send Form">Aceptar</button>
            </div>
        </div>

    )
}
export default Registro;