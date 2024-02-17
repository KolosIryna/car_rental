import React from "react";
import { NavLink } from "react-router-dom";

import { StyledHeader } from "./StyledHeader.styled";
import Car from "../../image/car.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <NavLink to="/" className="logo">
          <img src={Car} alt="Car" width="60px" height="60px" />
          <p>Car Rental</p>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" className="header_link">
            Home
          </NavLink>
          <NavLink to="/catalog" className="header_link">
            Catalog
          </NavLink>
          <NavLink to="/favorites" className="header_link">
            Favorites
          </NavLink>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
