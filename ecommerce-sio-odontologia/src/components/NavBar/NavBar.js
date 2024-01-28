import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = ({ onPageChange }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <div className="d-flex align-items-center">
            <a className="navbar-brand" href="3">
            <img src="/images/logo.png" alt="Logo-consultorio" className="logo" style={{ width: '250px' }} />
            </a>
            <h3>Tratamientos Dentales</h3>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <button className="nav-link btn btn-outline-primary" onClick={() => onPageChange('limpieza')}>Limpieza Dental</button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn btn-outline-primary" onClick={() => onPageChange('blanqueamiento')}>Blanqueamiento</button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn btn-outline-primary" onClick={() => onPageChange('ortodoncia')}>Ortodoncia</button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn btn-outline-primary" onClick={() => onPageChange('implantes')}>Implantes Dentales</button>
            </li>
        </ul>
        </div>
        <CartWidget itemCount={3} />
        </div>
    </nav>
    );
}

export default Navbar;