import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #2c1810;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom right, transparent 49%, #2c1810 50%);
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #ff6b4a;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff8266;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255,107,74,0.4);
  }
`;

function Contact() {
  return (
    <ContactSection>
      <Title>¿Listo para comenzar?</Title>
      <Description>
        Únete a nuestra comunidad de amantes de la gastronomía y descubre 
        experiencias culinarias únicas. Contáctanos para más información.
      </Description>
      <ContactButton 
        href="https://docs.google.com/forms/d/e/1FAIpQLSet852pYtY9dh68Lw6L-P1yDsZ_mQ-oNabukagItcSpfCKgbg/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contáctanos Ahora
      </ContactButton>
    </ContactSection>
  );
}

export default Contact;
