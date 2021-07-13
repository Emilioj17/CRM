import React from "react";

const EditarContacto = () => {
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
                      className="img-fluid rounded-circle"
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
                    <div className="row g-0 my-2">

                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    <input type="text" name="" id="" className="w-50" />
                    </div>                    
                  </div>
              </div>
            </div>
            {/* Lower Content */}
            <div className="col-12 col-md-6 border">
              <h1>gato</h1>
            </div>

            <div className="col-12 col-md-6 border">
              <h1>camello</h1>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditarContacto;
