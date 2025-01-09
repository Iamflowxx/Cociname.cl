import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ff6b4a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  
  span {
    color: #ffd700;
  }
`;

const ContactButton = styled.a`
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255,255,255,0.2);
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>Coci<span>name</span></Logo>
      <ContactButton 
        href="https://docs.google.com/forms/d/e/1FAIpQLSet852pYtY9dh68Lw6L-P1yDsZ_mQ-oNabukagItcSpfCKgbg/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contáctanos
      </ContactButton>
    </Nav>
  );
}

export default Navbar;
