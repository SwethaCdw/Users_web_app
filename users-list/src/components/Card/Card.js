import React from 'react';
import './Card.css';
import { handleImageError } from '../utils/common-utils';

const Card = ({ data }) => {
  const { name, profile_picture, place, hobbies } = data;


  return (
    <article className="card">
      <figure className='profile-picture'>
        <img src={profile_picture} alt={name} onError={handleImageError} />
      </figure>

      <div className="card-details">
        <h2 className='user-name'>{name}</h2>
        <p className='user-place'>{place}</p>
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index} className='hobbies-list-item'>{hobby}</li>
          ))}
        </ul>
      </div>
  </article>
  );
}

export default Card;