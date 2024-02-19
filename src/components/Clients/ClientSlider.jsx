// ClientSlider.jsx
import React from 'react';
import styled from 'styled-components';

const ClientSlider = (props) => {
  const { name, img_path } = props.item;

  return (
    <Container>
      <Logo src={img_path} alt={name} />
    </Container>
  );
};

export default ClientSlider;

const Container = styled.div`
  padding: 1.5rem 1rem;
  margin: 0 1rem;
`;

const Logo = styled.img`
  width: 90%;
  max-width: 110px;
  height: auto;
  object-fit: contain;
  margin-left: 8rem;
  @media(max-width:640px){
    margin-left:6.5rem;
  }
`;
