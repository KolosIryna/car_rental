import React, { useEffect } from 'react';
import { StyledModal } from './StyledModal.styled';
import closeModal from '../../image/close.svg';

const Modal = ({ onClose, car }) => {
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <StyledModal onClick={handleBackdrop}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <img src={closeModal} alt="" width="24px" height="24px" />
        </button>
        <img
          className="img-modal"
          src={car.img}
          alt={car.model}
          width="461px"
          height="248px"
        />
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
        <div>
          <p>{car.description}</p>
        </div>
        <div>
          <h2>Accessories and functionalities:</h2>
          <div>
            <p>
              <span>{car.functionalities[0]}</span>|
              <span>{car.functionalities[1]}</span>|
              <span>{car.functionalities[2]}</span>
            </p>
            <p>
              <span>{car.accessories[0]}</span>|
              <span>{car.accessories[1]}</span>|
              <span>{car.accessories[2]}</span>
            </p>
          </div>
        </div>
        <div>
          <h2>Rental Conditions:</h2>
          <div>
            <p>{car.rentalConditions}</p>

            <p>
              Mileage: <span>{car.mileage}</span>
            </p>
            <p>
              Price: <span>{car.rentalPrice}$</span>
            </p>
          </div>
        </div>
        <a className="button" href="tel:+380730000000">
          Rental car
        </a>
      </div>
    </StyledModal>
  );
};

export default Modal;
