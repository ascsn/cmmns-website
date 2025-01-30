import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavList, NavItem, LogoLink, LogoImage, Hamburger } from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <LogoLink to="/">
        <LogoImage src="/cmmns_logo_s.png" alt="CMMNS Logo" />
      </LogoLink>
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavList className={isOpen ? 'active' : ''}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/research">Research</Link></NavItem>
        <NavItem><Link to="/team">Team</Link></NavItem>
        <NavItem><Link to="/publications">Publications</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;