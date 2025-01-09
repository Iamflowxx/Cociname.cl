import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(255,107,74,0.2) 0%, rgba(44,24,16,0.4) 100%);
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  
  span {
    color: #ffd700;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  background: #ff6b4a;
  color: white;
  
  &:hover {
    background: #ff8266;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255,107,74,0.4);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Content>
        <Title>Descubre Sabores <span>Únicos</span> con Cociname</Title>
        <Subtitle>
          Conectamos amantes de la buena cocina con talentosos chefs personales para crear 
          experiencias gastronómicas inolvidables
        </Subtitle>
        <Button 
          href="https://docs.google.com/forms/d/e/1FAIpQLSet852pYtY9dh68Lw6L-P1yDsZ_mQ-oNabukagItcSpfCKgbg/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registrarse como Chef
        </Button>
      </Content>
    </HeroSection>
  );
}

export default Hero;
