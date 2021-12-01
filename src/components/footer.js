import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Inicio</Link></li>
                <li className="nav-item"><Link to="/categorias" className="nav-link px-2 text-muted">Categorias</Link></li>
                <li className="nav-item"><Link to="/faqs" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">Sobre Nosotros</Link></li>
            </ul>
            <p className="text-center text-muted">&copy; Consorcio de Peajes de Popayán</p>
        </footer>
        </>
    );
}

export default Footer;