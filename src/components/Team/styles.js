import styled from 'styled-components';

export const TeamContainer = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  color: #003366;
  margin-bottom: 1rem;
`;

export const TeamMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const TeamMember = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const MemberName = styled.h3`
  color: #003366;
`;

export const MemberTitle = styled.p`
  font-style: italic;
`;

export const MemberDetails = styled.div`
  margin-top: 0.5rem;

  p {
    margin: 0.2rem 0;
  }
`;


export const CyContainer = styled.div`
  width: 100%;
  height: 2000px;

  .tippy-box[data-theme~='light'] {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 14px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    color: #003366;
  }

  .tippy-box[data-theme~='light'] h3 {
    margin-top: 0;
  }
`;