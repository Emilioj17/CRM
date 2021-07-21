import React, { useEffect } from "react";
import { useHistory } from "react-router";

const EditarContacto = () => {
  const { store, actions } = useContext(AppContext);
  let history = useHistory()
  useEffect(() => {
    if (store.token === null) {
      history.push('/login')
      actions.getContacts();
      actions.getUsers();
      actions.getNotes();
      actions.getDeals();
    }
  }, []);

  return (
    <>
      <div className="container">
        <h4 className="my-3">Editar Contacto</h4>
        <form className="border">
          <div className="row">
            {/* Card Primary Info */}
            <div className="col-12 col-md-6">
              <div className="container d-flex align-items-center justify-content-center ">
                <div className="row g-0">
                  <div className="col-md-3 d-flex align-items-center justify-content-center py-2 px-2">
                    <img
                      src="https://picsum.photos/300"
                      alt="#"
                      className="img-fluid rounded-circle py-3"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <input
                        className="w-100 my-4"
                        type="text"
                        name="contact_edit_name"
                        id="contact_edit_name"
                        placeholder="Nombre Cliente"
                      />
                      <input
                        className="w-100"
                        type="text"
                        name="contact_edit_email"
                        id="contact_edit_email"
                        placeholder="Email Cliente"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Notes */}
            <div className="col-12 col-md-6 my-3">
              <div className="container d-flex align-items-center justify-content-center">
                <div className="row w-100">
                  <div className="card text-white border-0">
                    <div className="card-header bg-danger text-center">
                      Notas del cliente
                    </div>

                    <textarea
                      className="form-control w-100"
                      rows="4"
                      name="contact_edit_notes"
                      id="contact_edit_notes"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* Middle Content */}
            <div className="col-12">
              <div className="container">
                <div className="card text-white border-0">
                  <div className="card-header bg-danger text-center">
                    Notas del cliente
                  </div>
                  <div className="container">
                    <div className="row py-2">
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Direccion:"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Ciudad:"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Pais:"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Telefono:"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Agente Activo"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Area:"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Cliente Captado:"
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-100 my-2"
                          placeholder="Tratos hasta la fecha:"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Lower Content Left */}
            <div className="col-12 col-md-6">
              <div className="container">
                <div className="row">
                  <div className="card text-white border-0">
                    <div className="card-header bg-danger text-center">
                      Ultimos tratos activos
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Trato #, Fecha de inicio, Fecha de termino
                        </li>
                        <li className="list-group-item">
                          Trato #, Fecha de inicio, Fecha de termino
                        </li>
                        <li className="list-group-item">
                          Trato #, Fecha de inicio, Fecha de termino
                        </li>
                        <li className="list-group-item">
                          Trato #, Fecha de inicio, Fecha de termino
                        </li>
                        <li className="list-group-item">
                          Trato #, Fecha de inicio, Fecha de termino
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Lower Contetn Right */}
            <div className="col-12 col-md-6">
              <div className="container">
                <div className="row">
                  <div className="card text-white border-0">
                    <div className="card-header bg-danger text-center">
                      Informacion sobre tipo de cliente
                    </div>
                    <div className="card-body">
                      <select
                        name="edit_contact_usertype"
                        id="edit_contact_usertype"
                        className="form-select my-2"
                      >
                        <option defaultValue>Desea transformar en contacto:</option>
                        <option value="1">Si</option>
                        <option value="1">No</option>
                      </select>
                      <input className="w-100 my-2" type="text" name="edit_contact_date" id="edit_contact_date" value="Fecha" />
                      <input className="w-100 my-2" type="text" name="edit_contact_agent" id="edit_contact_agent" value="Nombre del agente" />

                      {/* Button Row */}
                      <div className="row py-3">
                        <div className="col d-flex justify-content-end">
                          <button className="btn btn-success mx-2">Guardar</button>
                          <button className="btn btn-danger">Cancelar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default EditarContacto;
