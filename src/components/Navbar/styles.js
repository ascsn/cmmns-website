import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  background-color: #003366;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; // Allow items to wrap on smaller screens
`;

export const LogoLink = styled(Link)`
  // Add styles for the logo link if needed
  flex-shrink: 0; // Prevent the logo from shrinking
`;

export const LogoImage = styled.img`
  height: 50px;
  margin-right: 2rem;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  // On smaller screens, hide the NavList by default
  @media (max-width: 768px) {
    display: none;
    flex-direction: column; // Stack items vertically
    width: 100%; // Take full width
    text-align: center; // Center text

    // Show NavList when active (controlled by JavaScript)
    &.active {
      display: flex;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;

  a {
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  // On smaller screens, add margin to the top
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

// Add a hamburger button for smaller screens
export const Hamburger = styled.div`
  display: none; // Hide by default on larger screens
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show on smaller screens
  }

  // Style the hamburger icon (three lines)
  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
  }
`;