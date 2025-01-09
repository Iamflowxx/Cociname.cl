import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #fff9f2;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #ff6b4a 10%, transparent 70%);
    opacity: 0.1;
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #2c1810;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Feature = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(255,107,74,0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #fff9f2;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #ff6b4a;
`;

const FeatureTitle = styled.h3`
  color: #2c1810;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: 'Playfair Display', serif;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

function WhyChooseUs() {
  return (
    <Section>
      <Title>¿Por qué elegir Cociname?</Title>
      <Subtitle>La mejor manera de disfrutar de comida casera de calidad, preparada por chefs profesionales</Subtitle>
      
      <Grid>
        <Feature>
          <FeatureIcon>👨‍🍳</FeatureIcon>
          <FeatureTitle>Chefs Verificados</FeatureTitle>
          <FeatureDescription>
            Todos nuestros chefs pasan por un riguroso proceso de verificación
            para garantizar la mejor calidad.
          </FeatureDescription>
        </Feature>
        
        <Feature>
          <FeatureIcon>⏰</FeatureIcon>
          <FeatureTitle>Flexibilidad Horaria</FeatureTitle>
          <FeatureDescription>
            Adapta los horarios según tu agenda. Tú decides cuándo y dónde
            disfrutar de tu experiencia culinaria.
          </FeatureDescription>
        </Feature>
        
        <Feature>
          <FeatureIcon>🎯</FeatureIcon>
          <FeatureTitle>Cocina Personalizada</FeatureTitle>
          <FeatureDescription>
            Menús adaptados a tus preferencias y necesidades específicas.
            Tu satisfacción es nuestra prioridad.
          </FeatureDescription>
        </Feature>
        
        <Feature>
          <FeatureIcon>🛡️</FeatureIcon>
          <FeatureTitle>100% Seguro</FeatureTitle>
          <FeatureDescription>
            Sistema de pagos seguro y garantía de satisfacción en cada
            experiencia culinaria.
          </FeatureDescription>
        </Feature>
      </Grid>
    </Section>
  );
}

export default WhyChooseUs;
