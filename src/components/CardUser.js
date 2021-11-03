import React, {useEffect, useState} from 'react';
import MaleIcon from '../assets/male.png';
import FemaleIcon from '../assets/female.png';
import PhoneIcon from '../assets/phone.png';
import PlaceIcon from '../assets/place.png';

const CardUser = ({ data }) => {
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)

  useEffect(() => {
    const handler = (e) => setMatches( e.matches );
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }, []);

  return (
    <div className='card flex column center secondary'>
      <img width='150' src={data.picture.large} alt='' />
      <div className='flex mt-5'>
        <img
          src={data.gender === 'male' ? MaleIcon : FemaleIcon}
          width='20'
          alt='user-icon'
          className='mr-5'
        />
        {data.name.first} {data.name.last}
      </div>
      <div className='flex mt-5'>
        <img 
        src={PhoneIcon} width='20' 
        alt='phone-icon' 
        className='mr-5' />
        {data.cell}
      </div>
      <div className='flex mt-5'>
        <img src={PlaceIcon} width='20' alt='country-icon' className='mr-5' />
        {data.location.country}
      </div>
      {JSON.stringify(matches)}
    </div>
  );
};

export default CardUser;
