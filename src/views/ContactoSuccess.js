import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';

const ContactoSuccess = () => {
  const { store } = useContext(AppContext);
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  }

  useEffect(() => {
    if (store.token === null) {
      history.push('/login')
    }
  }, []);

  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12">
          <h1 className="text-center">Enviado correctamente</h1>
          <div className="row">
            <div className="container d-flex justify-content-center">
              <button onClick={handleClick} className="btn btn-warning text-light ">
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactoSuccess
