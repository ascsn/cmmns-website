import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  color: #003366;
  margin-bottom: 1rem;
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ContactItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
`;

export const ContactLabel = styled.p`
  font-weight: bold;
`;

export const ContactValue = styled.p`
  margin: 0.2rem 0;
`;