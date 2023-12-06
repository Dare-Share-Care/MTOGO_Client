import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logoImage from "../img/logo.png";

const Logo: React.FC = () => {
  return (
      <NavLink to="/"> <img src={logoImage} alt="MTOGO Logo" className="mtogo-image"></img> </NavLink>
  );
};

export default Logo;

