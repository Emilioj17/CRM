import React from "react";

const Contacto = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Contacto</h1>
        <hr />
        <div className="row">          
          <div className="col-12 col-md-6 my-3">
            <nav className="navbar navbar-light bg-primary">
              <div className="container-fluid">
                <span className="text-light">Comunicate con nosotros</span>
              </div>
            </nav>
            <form>
              <div className="container border">

                <input className="w-100 my-2" type="text" name="contact_form_name" id="contact_form_name" placeholder="First Name" />
                <input className="w-100 my-2" type="text" name="contact_form_name" id="contact_form_name" placeholder="Email" />
                <input className="w-100 my-2" type="text" name="contact_form_name" id="contact_form_name" placeholder="Phone" />
                <textarea name="" id="" cols="81" rows="10" placeholder="Type your message"></textarea>
                <button type="submit" className="btn btn-primary mb-5">Enviar</button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 my-3">
            <div className="container">
              <div className="card border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6916667979667!2d-70.61851098426537!3d-33.431282103915905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf7c99c8e8af%3A0x9e6c15ae46a25dc7!2sAntonio%20Varas%20416%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1626104879146!5m2!1ses-419!2scl"
                  frameborder="0"
                  width="600"
                  height="450"
                  className="card-img-top"
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">CRM Headquarters, Chile</h5>
                  <p className="card-text text-muted">hello@hello.com</p>
                  <p className="card-text text-muted">123456789</p>
                  <h5 className="card-title">Follow Us</h5>
                  <span className="card-link text-muted">IG</span>
                  <span className="card-link text-muted">FB</span>
                  <span className="card-link text-muted">TW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
