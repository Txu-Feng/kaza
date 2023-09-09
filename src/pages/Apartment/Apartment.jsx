import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Apartment.scss';
import data from '../../data/data.json';
import Slider from '../../components/Carousel/Slider';
import Host from '../../components/Host/Host';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';


export default function Apartment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apartmentData = data.find((item) => item.id === id);

  useEffect(() => {
    if (!apartmentData) {
      navigate('*');
    }
  }, [apartmentData, navigate]);

  if (apartmentData) {
    return (
      <section>
        <Slider pictures={apartmentData.pictures} title={apartmentData.title} />
        <div className='apartement-info'>
          <div className='apartement-info_first-container'>
            <div className="apartement-info_first-container_title-location-container">
              <h1 className="apartement-info_first-container_title-location-container_title">{apartmentData.title}</h1>
              <h2 className="apartement-info_first-container_title-location-container_location">{apartmentData.location}</h2>
            </div>
            <Tag tags={apartmentData.tags} />
          </div>
          <div className='apartement-info_second-container'>
            <Host name={apartmentData.host.name} picture={apartmentData.host.picture} />
            <Rating rating={parseInt(apartmentData.rating)} />
          </div>
        </div>
        <div className='apartement-collapse'>
          <Collapse title='Description'>
            <p>{apartmentData.description}</p>
          </Collapse>
          <Collapse title='Équipements'>
            <ul>
            {apartmentData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
            </ul>
          </Collapse>
        </div>
      </section>
    );}
    else{
      return null;
    }
};

  