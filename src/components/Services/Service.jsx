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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

const Service = () => {
  const cardsData = [
    { buttonText: 'Learn More', backgroundImage: '/Images/homeTextile.jpeg', additionalText: 'Yarn Sourcing', link: 'YarnSourcing' },
    { buttonText: 'Learn More', backgroundImage: '/Images/textile.jpeg', additionalText: 'Fabric Sourcing', link: 'FabricSourcing' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Garments', link: 'GarmentServices' },
    { buttonText: 'Learn More', backgroundImage: '/Images/homeTextile.jpeg', additionalText: 'Compliance Services', link: 'ComplianceServices' },
    { buttonText: 'Learn More', backgroundImage: '/Images/textile.jpeg', additionalText: 'Customized Products', link: 'CustomizedProducts' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Certifications', link: 'Certifications' },
    { buttonText: 'Learn More', backgroundImage: '/Images/yarn.jpeg', additionalText: 'Consulatancy', link: 'Consultancy' },
  ];

  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Our <span className="green">Services</span>
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

export default Service;
