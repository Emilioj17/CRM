import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <link className="navbar-brand" to="/">LOGO </link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" href="#">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" href="#">Nosotros</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" href="#">Contacto</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" href="#">Producto</link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;