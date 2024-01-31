import React from "react";
import { NavLink } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return ( 
  <header>
    <NavLink to="/">
     <FaGripLines className="icons" />
    </NavLink>
    <Navbar />
  </header>
  );
};

const MainHeader =styled.header`
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.body};
      display: flex;
      justify-content: space-between;
      aline-items: center;    
`;

export default Header;