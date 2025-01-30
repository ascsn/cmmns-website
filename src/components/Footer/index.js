import React from 'react';
import { FooterContainer, FooterText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Center for Multifidelity Modeling of Nuclear Science
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;