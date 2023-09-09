import './Error.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
      <section className='error'>
        <h1 className='error_title'>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </section>
    )
  }


  