import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const Subtitle = styled.p`
  color: #738290;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Copyright = styled.p`
  color: #738290;
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: #738290;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoLink href="https://iwie.space/" target="_blank" rel="noopener noreferrer">
        <Logo src="/logo.png" alt="IWIE Space" />
      </LogoLink>
      <Subtitle>Creatividad y Desarrollo Colaborativo</Subtitle>
      <Copyright>Copyright 2024 - Todos los derechos reservados</Copyright>
      <SocialLinks>
        <SocialLink href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
