import React from 'react';
import logo from '../image/logo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <>
    <header className="table-header">
      <img src={logo} alt="Logo"  className="picture-logo"/>
      <Link to="/form" className="linkHeader"> Cadastro </Link>
      <Link to="/table" className="linkHeader"> Tabela</Link>
      <Link to='/' className="linkHeader">Logout</Link>
   
    </header>
    </>
  )
}
export default Header;