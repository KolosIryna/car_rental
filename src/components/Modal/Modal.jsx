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
            {car.make} <span className="span-name">{car.model}</span>,{' '}
            {car.year}
          </p>
        </div>
        <div className="blok">
          <p>{car.address}</p> |<p>{car.rentalCompany}</p>|
          <p>{car.accessories}</p>|
        </div>
        <div className="blok">
          <p>{car.type}</p>|<p>{car.id}</p>|<p>{car.functionalities}</p>|
        </div>
        <div className="text">
          <p>{car.description}</p>
        </div>
        <div>
          <h3 className="text2">Accessories and functionalities:</h3>
          <div>
            <p className="text3">
              <span>{car.functionalities[0]}</span>|
              <span>{car.functionalities[1]}</span>|
              <span>{car.functionalities[2]}</span>
            </p>
            <p className="text3">
              <span>{car.accessories[0]}</span>|
              <span>{car.accessories[1]}</span>|
              <span>{car.accessories[2]}</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text2">Rental Conditions:</h3>
          <div className="conteiner1">
            <p className="text-conteiner">{car.rentalConditions}</p>
            <p className="text-conteiner">
              Mileage:
              <span className="span-name">{car.mileage}</span>
            </p>
            <p className="text-conteiner">
              Price:{' '}
              <span className="span-name">{car.rentalPrice.slice(1)}$</span>
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
