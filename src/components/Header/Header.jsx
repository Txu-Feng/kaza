import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import Logo from '../../assets/logo.png';
import './Header.scss'

export default function Header() {
  const location = useLocation();
  return (
    <header className='header'> 
      <img className='header_logo' src={Logo} alt="logo de Kasa" />
      <nav>
        <ul className='header_nav'>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

