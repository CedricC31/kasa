import './banner.css';
import React from 'react';

export default function Banner({ bannerImg, bannerTitle = "" }) {

  return (
    <figure className="banner">
      <img src={bannerImg} alt="Paysage" className='banner_img' />
      <figcaption className='banner_title'>{bannerTitle}</figcaption>
    </figure>
  );
}