import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/SendEmail.css"

const SendEmail = () => {
  return (
      <div className="SendEmail">
          <div className="container">
              <div className="d-flex flex-row-reverse m-2">
                  <button type="button" className="btn btn-success m-2">Recibidos</button>
                  <button type="button" className="btn btn-success m-2">Enviados</button>
                  <button type="button" className="btn btn-success m-2">Redactar</button>
              </div>
              <div className="col-12 cuerpoSendEmail">
                  <div className="headCuerpoSendEmail text-center py-2">
                      <h4>Enviar Correo</h4>
                  </div>
                  <div className="bodyCuerpoSendEmail p-2">
                      <div className="row">
                          <div class="col-12 col-md-6">
                              <h6>Para:</h6>
                              <input type="text" class="form-control" placeholder="Correo de Destino"/>
                          </div>
                          <div class="col-12 col-md-6">
                              <h6>Cc:</h6>
                              <input type="text" class="form-control" placeholder="Correo en Copia (Opcional)"/>
                          </div>
                      </div>
                      <div className="row py-2">
                          <div class="col-12">
                              <h6>Asunto:</h6>
                              <input type="text" class="form-control" placeholder="Asunto de tu Correo"/>
                          </div>
                      </div>
                      <div className="row py-2">
                          <div class="col-12">
                              <h6>Mensaje:</h6>
                              <textarea class="form-control" placeholder="Escribe tu mensaje Aquí." rows="8"/>
                          </div>
                      </div>
                  </div>
                  <div className="botonesSendEmail d-flex flex-row-reverse m-2">
                      <button type="button" className="btn btn-danger m-2">Cancelar</button>
                      <button type="button" className="btn btn-success m-2">Enviar</button>
                  </div>
              </div>
            </div>
        </div>
  );
};
export default SendEmail;