import React from 'react';
import MaleIcon from '../assets/male.png';
import FemaleIcon from '../assets/female.png';
import PhoneIcon from '../assets/phone.png';
import PlaceIcon from '../assets/place.png';

const CardUser = ({ data }) => {
  
  return (
    <div className='card flex column center secondary' style={{width: 160}}>
      <img width='160' src={data.picture.large} alt='' />
      <div className='flex mt-5'>
        <img
          src={data.gender === 'male' ? MaleIcon : FemaleIcon}
          width='20'
          height='20'
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
    </div>
  );
};

export default CardUser;
