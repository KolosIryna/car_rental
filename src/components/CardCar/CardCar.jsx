import React from 'react';
import Normal from '../../image/normal.svg';
import Active from '../../image/active.svg';
import PlaceholderImage from '../../image/znachki.jpg';

const CardCar = ({ car, openModal, isFavorite, toggleFavorite }) => {
  return (
    <li key={car.id} className="car-li">
      <div className="conteiner-img">
        <img
          src={car.img || PlaceholderImage}
          alt={car.model}
          className="car-img"
          width="274px"
          height="268px"
        />
      </div>

      <div className="name-car">
        <p>
          {car.make} {car.model}, {car.year} {car.rentalPrice}
        </p>
      </div>
      <div className="blok">
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
        <p>{car.accessories}</p>
      </div>
      <div className="blok">
        <p>{car.type}</p>
        <p>{car.id}</p>
        <p>{car.functionalities}</p>
      </div>

      <button onClick={() => openModal(car)} className="btnLearn">
        Learn more
      </button>

      <div className="conteiner-favorite">
        <img
          src={isFavorite(car.id) ? Active : Normal}
          alt=""
          className="favorite"
          onClick={() => toggleFavorite(car.id)}
        />
      </div>
    </li>
  );
};

export default CardCar;
