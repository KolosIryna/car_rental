import React from 'react';

import { StyledHomePage } from './StyledHomePage.styled';

const HomePage = () => {
  return (
    <div>
      <StyledHomePage>
        <h1 className="title">Welcome to our car rental website!</h1>
        <p className="text">
          We offer a wide selection of cars for rent in Ukraine.
        </p>
        <div className="services">
          <p className="text">Our services include:</p>
          <ul className="list">
            <li>Renting a car for several hours or days</li>
            <li>A wide selection of cars of different classes and brands</li>
            <li>Affordable prices and flexible discount system</li>
          </ul>
        </div>
      </StyledHomePage>
    </div>
  );
};

export default HomePage;
