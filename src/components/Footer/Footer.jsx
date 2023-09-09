import React from 'react';
import './Footer.scss';
import WhiteLogo from '../../assets/white_logo.png';

export default function Footer() {
  return (
    <footer className='footer'>
        <img src={WhiteLogo} alt="Logo" />  
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
