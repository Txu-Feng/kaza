import React from 'react';
import './Banner.scss';

export default function Banner ({ bannerImage, bannerTitle }){
  return (
    <section className='banner'>
      <div className='banner_container'>
        {bannerImage && <img src={bannerImage} alt="bannière du site" />}
      </div>
      {bannerTitle && <h1 className='banner_title'>{bannerTitle}</h1>}
    </section>
  );
};


