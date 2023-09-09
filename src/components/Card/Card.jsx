import React from 'react';
import { Link } from 'react-router-dom';
import'./Card.scss';

export default function Card({ id, cover, title }) {
    return (
      <article className="card">
      <Link to={`/apartment/${id}`}>
          <img className="card_img" src={cover} alt={title} />
          <h2 className="card_title">{title}</h2>
      </Link>
      </article>
    );
}
  