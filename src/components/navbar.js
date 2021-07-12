import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<Link className="navbar-brand ms-3" to="/">
					LOGO
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Inicio
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/nosotros">
								Nosotros  
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto">
								Contacto
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/producto">
								Producto
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">
								Ingresar
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
=======

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-1 h1">
            <img
              src="#"
              width="70"
              height="auto"
              className="d-inline-block align-top"
              alt=""
            />


          </span>
        <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link active">Somewhere</Link>
          </li>
          <li className="nav-item">
            <Link to="/remind" className="nav-link active">Somwhere</Link>
          </li>      
        </ul>
        </div>

      </nav>
    </>
  );
}

>>>>>>> 606fc5d9857e429111824fd332fe7a8c311e290f
export default Navbar;