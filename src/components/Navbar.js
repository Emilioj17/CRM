import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark ">
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
							<Link className="nav-link Ingresar" to="/login">
								Ingresar
							</Link>
						</li>
					</ul>
				</div>
			</nav>
    </>
  );
}

export default Navbar;