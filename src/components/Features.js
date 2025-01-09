import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.div`
  padding: 6rem 2rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom right, #ff6b4a 50%, transparent 50%);
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: #ff6b4a;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(255,107,74,0.2);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #fff9f2;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ff6b4a;
`;

const FeatureTitle = styled.h3`
  color: #2c1810;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Features() {
  return (
    <FeaturesSection>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>🍳</FeatureIcon>
          <FeatureTitle>Cocina Personalizada</FeatureTitle>
          <FeatureDescription>
            Encuentra chefs que se adapten perfectamente a tus gustos y necesidades específicas.
            Disfruta de una experiencia culinaria única.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>✨</FeatureIcon>
          <FeatureTitle>¡Sorpréndeme!</FeatureTitle>
          <FeatureDescription>
            Déjate sorprender por nuevos sabores y experiencias culinarias únicas.
            Cada plato es una nueva aventura gastronómica.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🥗</FeatureIcon>
          <FeatureTitle>Cocinas Especiales</FeatureTitle>
          <FeatureDescription>
            Opciones especializadas para dietas específicas y restricciones alimentarias.
            Tu salud y preferencias son nuestra prioridad.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
}

export default Features;
