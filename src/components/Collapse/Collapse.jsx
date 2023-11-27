import React, { useState } from 'react';
import './Collapse.scss';
import ArrowUp from '../../assets/arrow_up.png';

const Collapse = ({ title, children}) => {
  
  // etat (state)
  const [isOpen, setIsOpen] = useState(false); 

  // comportement ( evenement)
  const toggleCollapse = () => {
    setIsOpen(!isOpen); 
  };

  //affichage (render)
  return (
    <div className='collapse'>
      <div className={`collapse_name ${isOpen ? 'rotate' : ''}`}  onClick={toggleCollapse}>
        {title} 
        <img  src={ArrowUp} alt={ArrowUp} />
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : 'close'}`}>{children}</div>
    </div>
  );
};

export default Collapse;
