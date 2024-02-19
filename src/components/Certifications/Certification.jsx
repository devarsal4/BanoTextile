// Clients.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CertificationSlider from './CertificationSlider';
import { Slide } from 'react-awesome-reveal';

let clients = [
  {
    name: 'Aldi',
    img_path: '/Images/Certificates/certificate1.png', // Update the path based on your actual folder structure
  },
  {
    name: 'Ashley',
    img_path: '/Images/Certificates/certificate2.png',
  },
  {
    name: 'BeirHolm',
    img_path: '/Images/Certificates/certificate3.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate4.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate5.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate6.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate7.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate8.png',
  },
  {
    name: 'Ralph',
    img_path: '/Images/Certificates/certificate9.png',
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
  let clientLogos = clients.map((item, i) => <CertificationSlider item={item} key={i} />);

  return (
    <Container id='client'>
      <Slide direction='left'>
        <h1>Our</h1>
        <h1>
          <span className='green'>Certifications</span>
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


