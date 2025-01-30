import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const HeroSection = styled.section`
  position: relative;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  background-image: url("/hero.jpeg");
  background-size: cover;
  background-position: center;
  height: 400px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically center the title and subtitle
  align-items: center;     // Horizontally center the title and subtitle
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  display: none; 
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  text-shadow: none;
  margin: 0;
  z-index: 10; // Ensure title is above the background

  // Add a semi-transparent background for readability on light images
  background-color: rgba(0, 0, 0, 0.4); 
  padding: 0.5rem 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 2.5rem; // Adjust font size for smaller screens
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  text-shadow: none;
  margin: 0;
  z-index: 10; // Ensure subtitle is above the background

  // Add a semi-transparent background for readability on light images
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 1.2rem; // Adjust font size for smaller screens
  }
`;

export const ContentSection = styled.section`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: left;
`;

export const ContentTitle = styled.h2`
  color: #003366;
`;

export const ContentBody = styled.p`
  line-height: 1.6;
`;