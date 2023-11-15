import './thumb.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Thumb({id, title, cover}) {

  return (
    <Link to={`/housing/${id}`}>
      <figure className='thumb'>
        <img src={cover} alt={title} className='thumb_img' />
        <figcaption className='thumb_title'>{title}</figcaption>
      </figure>
    </Link>
  );
}