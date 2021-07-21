import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <footer className="container-fluid py-3 text-center">
            <h5 className="card-title">Síguenos en redes sociales</h5>
                  <span className="card-link text-muted">
                    <a className='text-light' href="http://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>                    
                    </span>
                  <span className="card-link text-muted">
                  <a className='text-light' href="http://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                  </span>
                  <span className="card-link text-muted ">
                  <a className='text-light' href="http://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                  </span>
            </footer>
        </>
    )
}

export default Footer
