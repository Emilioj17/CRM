import React from 'react'
import { useHistory } from 'react-router';

const ContactoSuccess = () => {
    
    const history = useHistory();
  const handleClick = () => {
    history.push("/contacto");
}

    return (
       <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12">
          <h1 className="text-center">Enviado correctamente</h1>
          <div className="row">
            <div className="container d-flex justify-content-center">
              <button onClick={handleClick} className="btn btn-warning ">
                Volver contacto
              </button>
            </div>
          </div>
        </div>
      </div>
       </>
    )
}

export default ContactoSuccess
