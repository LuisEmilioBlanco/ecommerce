import React from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  // Estilos para el contenedor principal
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  // Estilos para enlaces
  color: #333;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar className="navbar navbar-expand-lg navbar-light">

      <StyledLink to="/" className="navbar-brand">
        <img src="/images/logo.png" alt="Logo-consultorio" className="logo" style={{ width: '250px' }} />
      </StyledLink>
      <h3 style={{ fontSize: '1.5rem', margin: '0 10px' }}>Tratamientos Dentales</h3>

    <StyledLink to="/limpieza">Limpieza Dental</StyledLink>
    <StyledLink to="/blanqueamiento">Blanqueamiento</StyledLink>
    <StyledLink to="/ortodoncia">Ortodoncia</StyledLink>
    <StyledLink to="/implantes">Implantes Dentales</StyledLink>

      <CartWidget itemCount={3} />
    </StyledNavbar>
  );
}

export default Navbar;
