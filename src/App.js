import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #fff9f2;
  }
`;

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #2c1810;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Hero />
        <Features />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
