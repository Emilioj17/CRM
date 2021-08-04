import React, { useState, useContext,useEffect } from 'react';
import { MdSecurity } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import '../style/Recuperar.css';
import axios from 'axios';


function Recuperar() {

    
    const HandlerSend = (e) => {
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('forgot' , data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }


    return (
        <div className="container">
        <div className="row my-5">
            <form className="my-5 recuperar" onSubmit={(e) => HandlerSend(e)} >
            <h1 className="text-center">Recuperar</h1>
                <div className="md-3">
                    <p className="icon-security"> <MdSecurity /> </p>
                    <label for="name" className="form-label "> Ingresa Tu Correo <HiMail /></label>
                    <input type="email" className="form-control" id="name" onChange={e => this.email = e.target.value} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Recuperar</button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Recuperar;