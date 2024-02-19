// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem; 
`;

const Category = () => {
  const cardsData = [
    { buttonText: 'Learn More', backgroundImage: '/Images/homeTextile.jpeg', additionalText: 'Home Textile', link: 'home-textile' },
    { buttonText: 'Learn More', backgroundImage: '/Images/textile.jpeg', additionalText: 'Raw Material', link: 'raw-material' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Yarn', link: 'yarn' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Synthetic', link: 'Synthetic' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Fabrics', link: 'Fabrics' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Finishing', link: 'Finishing' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Natural', link: 'Natural' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Garments', link: 'Garments' },
    // Add more categories as needed
  ];

  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Our <span className="green">Categories</span>
        </h4>
      </Slide>
      <Cards>
        {cardsData.map((card, index) => (
          <Slide key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
            <Link to={card.link}>
              <Card buttonText={card.buttonText} backgroundImage={card.backgroundImage} additionalText={card.additionalText} />
            </Link>
          </Slide>
        ))}
      </Cards>
    </Container>
  );
};

export default Category;