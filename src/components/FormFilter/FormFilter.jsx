import React, { useState } from 'react';
import { StyledFormFilter } from './StyledFormFilter.styled';

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const FormFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState('');

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilterChange(selectedMake);
  };

  return (
    <StyledFormFilter onSubmit={handleSubmit}>
      <div>
        <label htmlFor="" className="label">
          Car brand
        </label>
        <select
          className="selector"
          value={selectedMake}
          onChange={handleMakeChange}
          placeholder="Select a brand"
          width="224px"
        >
          <option value="">Enter the text</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="" className="label">
          Price/ 1 hour
        </label>
        <select className="selector" type="text" placeholder="To" />
      </div>

      <div>
        <label htmlFor="" className="label">
          Сar mileage / km
        </label>
        <div className="container">
          <div className="item">
            <div className="from-to">From</div>
            <input className="input-from" name="minMileage" id="minMileage" />
          </div>
          <div className="container2">
            <div className="from-to">To</div>
            <input
              className="input-to"
              type="number"
              name="maxMileage"
              id="maxMileage"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn" onClick={handleSubmit}>
        Search
      </button>
    </StyledFormFilter>
  );
};

export default FormFilter;
