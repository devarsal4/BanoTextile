import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { buttonText, backgroundImage, additionalText } = props;

  return (
    <Container style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})` }}>
      <Overlay>
        <BoldText>{additionalText}</BoldText>
        <Button>{buttonText}</Button>
      </Overlay>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.5);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* Added to stack the text and button vertically */
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const BoldText = styled.p`
  font-weight: bold;
  color: #A593EF;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #fff;
  color: #A593EF;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ;
    color: #191923;
  }
`;
