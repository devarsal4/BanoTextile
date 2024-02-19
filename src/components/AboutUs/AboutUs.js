import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #A593EF;
  padding: 5vw; /* Adjust the padding as needed */
  border-radius: 10px;
  max-width: 800px;
  margin-left: 10vw; /* Adjust the margin-left for positioning */
  animation: ${slideIn} 1s ease-in-out; /* Add slide-in animation */
  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout on small screens */
    margin: 5vw auto; /* Center on small screens */
  }
`;



const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;



const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  color: #fff;
  padding-left: 20px;
  @media (max-width: 768px) {
    padding-left: 0; /* Remove padding on small screens */
    margin-top: 20px; /* Add margin on small screens */
  }
`;

const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Container>
        <ImageContainer>
          <Image src="/Images/logo.png" alt="Yarn" />
          
        </ImageContainer>
        <TextContainer>
          <p>
            100% Nature, synthetic, Blended in carded | Combed, Combed compat, Naries by Ring spur, Auto coso, Ope end, MVS / MyS for for the Sector of rearing, Knitting and Moue Tostel.
          </p>
        </TextContainer>
      </Container>
      <br />
      <br />
      <br />
      
      
    </>
  );
};

export default AboutUs;
