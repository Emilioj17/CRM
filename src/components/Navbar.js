import React, { useContext } from "react";
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link as LinkScroll } from "react-scroll";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../store/appContext";

function Navbar() {
	const { store } = useContext(AppContext);
	const location = useLocation().pathname;
	let history = useHistory();

	function handleLogOut() {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("usuarioActual");
		store.token = null;
		store.usuarioActual = null;
		history.push("/");
	}

	if (location === "/") {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
				<div className="container">
					<Link className="navbar-brand ms-3" to="/">
						<img src={`/img/crm-facil-logo.svg`} alt="" width="150"></img>
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
					<div className="collapse navbar-collapse" id="navbarSupportedContent" >
						<ul className="navbar-nav mb-2">
							<li className="nav-item">
								<LinkScroll to="carousel" spy={true} smooth={true} offset={-500} duration={100} className="nav-link" style={{ cursor: "pointer" }}>
									Inicio
								</LinkScroll>
							</li>
							<li className="nav-item">
								<LinkScroll to="nosotros" spy={true} smooth={true} offset={-10} duration={100} className="nav-link" style={{ cursor: "pointer" }}>
									Nosotros
								</LinkScroll>
							</li>
							<li className="nav-item">
								<LinkScroll to="products" spy={true} smooth={true} offset={-100} duration={100} className="nav-link" style={{ cursor: "pointer" }}>
									Producto
								</LinkScroll>
							</li>
							<li className="nav-item">
								<LinkScroll to="contacto" spy={true} smooth={true} offset={-50} duration={100} className="nav-link" style={{ cursor: "pointer" }}>
									Contacto
								</LinkScroll>
							</li>

						</ul>
						<ul className="navbar-nav mb-2 ms-auto">
							<li className="ms-auto nav-item">
								<Link className="nav-link Ingresar" to="/login">
									<BiLogIn size={22} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	} else if (location === "/login" || location === "/registro") {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
				<div className="container">
					<Link className="navbar-brand ms-3" to="/">
						<img src={`/img/crm-facil-logo.svg`} alt="" width="150"></img>
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
								<Link to="/" className="nav-link">
									Producto
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="nav-link" >
									Contacto
								</Link>
							</li>

						</ul>
						<ul className="navbar-nav mb-2 ms-auto">
							<li className="ms-auto nav-item">
								<Link className="nav-link Ingresar" to="/login">
									<BiLogIn size={22} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	} else {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
				<div className="container">
					<Link className="navbar-brand ms-3" to="/">
						<img src={`/img/crm-facil-logo.svg`} alt="" width="150"></img>
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
								<span onClick={handleLogOut} className="nav-link Ingresar" to="/login" style={{ cursor: "pointer" }}>
									<BiLogOut size={22} />
								</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;