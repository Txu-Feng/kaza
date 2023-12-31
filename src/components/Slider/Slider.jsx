import React, { useState } from 'react';
import './Slider.scss';
import ArrowLeft from '../../assets/arrow_left.png';
import ArrowRight from '../../assets/arrow_right.png';

export default function Slider({ pictures, title }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const slideNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1));
  };

  return (
    <div className='slider'>
      { pictures.length <= 1 ? (
        <img className='slider_slide' src={pictures[currentIndex]} alt={title} />
        ) : (
        <>
          <img className='slider_arrow-left' src={ArrowLeft} alt='Previous' onClick={slidePrevious} />
          <img className='slider_slide' src={pictures[currentIndex]} alt={title} />
          <img className='slider_arrow-right' src={ArrowRight} alt='Next' onClick={slideNext} />
          <p className='slider_index'>{currentIndex + 1} / {pictures.length}</p>
        </>
      )}
    </div>
  );
}
