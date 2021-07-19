import React, { useEffect } from "react";
import { BiLogIn } from 'react-icons/bi';
import { Link as LinkScroll} from "react-scroll";
import { Link, useLocation  } from "react-router-dom";

function Navbar() {

	const location = useLocation().pathname;

	if(location =="/"){
		return(
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: "rgba(27, 75, 77, 1)" }}>
			<div className="container">
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
					<ul className="navbar-nav mb-2">
						<li className="nav-item">
							<LinkScroll to="carousel" spy={true} smooth={true} offset={-500} duration={100} className="nav-link" style={{cursor: "pointer"}}>
								Inicio
							</LinkScroll>
						</li>
						<li className="nav-item">
							<LinkScroll to="nosotros" spy={true} smooth={true} offset={-10} duration={100} className="nav-link" style={{cursor: "pointer"}}>
								Nosotros
							</LinkScroll>
						</li>
						<li className="nav-item">
							<LinkScroll to="products" spy={true} smooth={true} offset={-100} duration={100} className="nav-link" style={{cursor: "pointer"}}>
								Producto
							</LinkScroll>
						</li>
						<li className="nav-item">
							<LinkScroll to="contacto" spy={true} smooth={true} offset={-50} duration={100} className="nav-link" style={{cursor: "pointer"}}>
								Contacto
							</LinkScroll>
						</li>
						
					</ul>
					<ul className="navbar-nav mb-2 ms-auto">
						<li className="ms-auto nav-item">
							<Link className="nav-link Ingresar" to="/login">
								<BiLogIn />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		)
	}else if(location =="/login"){
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: "rgba(27, 75, 77, 1)" }}>
			<div className="container">
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
					<ul className="navbar-nav mb-2">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Inicio
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Nosotros
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/"className="nav-link">
								Producto
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/"  className="nav-link" >
								Contacto
							</Link>
						</li>
						
					</ul>
					<ul className="navbar-nav mb-2 ms-auto">
						<li className="ms-auto nav-item">
							<Link className="nav-link Ingresar" to="/login">
								<BiLogIn />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		)
	}else{
		return(
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: "rgba(27, 75, 77, 1)" }}>
			<div className="container">
				<Link className="navbar-brand ms-3" to="/bienvenidovendedor">
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
					<ul className="navbar-nav mb-2">
						<li className="nav-item">
							<Link to="/bienvenidovendedor" className="nav-link"> Inicio </Link>
						</li>
						<li className="nav-item">
							<Link to="/contactos" className="nav-link"> Posibles </Link>
						</li>
						<li className="nav-item">
							<Link to="/contactos" className="nav-link"> Contactos </Link>
						</li>
						<li className="nav-item">
							<Link to="/tratos" className="nav-link"> Tratos </Link>
						</li>
						<li className="nav-item">
							<Link to="/sendEmail" className="nav-link"> Correos </Link>
						</li>
						
					</ul>
					<ul className="navbar-nav mb-2 ms-auto">
						<li className="ms-auto nav-item">
							<Link className="nav-link Ingresar" to="/login">
								<BiLogIn />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		)
	}
}

export default Navbar;