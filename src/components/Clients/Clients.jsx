// Clients.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { Slide } from 'react-awesome-reveal';

let clients = [
  {
    name: 'Aldi',
    img_path: '/Images/Clients/client1.jpeg', // Update the path based on your actual folder structure
  },
  {
    name: 'Ashley',
    img_path: '/Images/Clients/client2.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client4.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client5.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client6.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client7.jpeg',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client8.jpeg',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Clients/client9.jpeg',
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true, // Added for automatic sliding
  autoplaySpeed: 3000, // Adjust the speed as needed
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientLogos = clients.map((item, i) => <ClientSlider item={item} key={i} />);

  return (
    <Container id='client'>
      <Slide direction='left'>
        <h1>Our</h1>
        <h1>
          <span className='green'>Clients</span>
        </h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientLogos}
        </Slider>
      </Testimonials>
    </Container>
  );
};

export default Clients;


const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
  
  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    text-align: center;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: center;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: '';
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #A593EF;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;


