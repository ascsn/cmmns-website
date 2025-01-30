import React from 'react';
import {
  ContactContainer,
  SectionTitle,
  ContactInfo,
  ContactItem,
  ContactLabel,
  ContactValue,
} from './styles';

const Contact = () => {
  return (
    <ContactContainer>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactInfo>
        <ContactItem>
          <ContactLabel>Get in touch!</ContactLabel>
          <ContactValue>
            cmmns at ascsn dot net
          </ContactValue>
        </ContactItem>
        
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;