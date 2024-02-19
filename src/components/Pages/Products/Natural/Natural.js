import React from 'react';
import styled, { keyframes } from 'styled-components';
import NaturalProduct from './NaturalProduct';

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
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3vw; /* Adjust margin for both sides */
  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout on small screens */
    margin: 0; /* Remove margin on small screens */
  }
`;

const YarnContainer = styled.div`
  background-color: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 9.5vw; /* Adjust the padding as needed */
  border-radius: 10px;
  max-width: 800px;
  margin: 0; /* Remove margin for smaller screens */
  animation: ${slideIn} 1s ease-in-out; /* Add slide-in animation */
  @media (max-width: 768px) {
    
    margin-top: 10px; /* Remove margin on small screens */
  }
`;

const ImageContainer1 = styled.div`
  display: flex;
  margin-left: 3vw; /* Add some space on the left for larger screens */
  max-width: 450px;
  animation: ${slideIn} 1s ease-in-out;
`;
const Head = styled.div`
  margin-left: 8vw;
  margin-top: 4vw;
  color: #A593EF;
  animation: ${slideIn} 1s ease-in-out;
`
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


const LightColorMain = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 20px;
  padding-bottom: 90px;
  
`;
const Natural = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
        Nature-Inspired Designs
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Products/Natural/1.jpg" alt="Natural" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          At BanoTextile, we have a profound appreciation for the inherent beauty of nature, and this admiration is woven into the very fabric of our company's ethos. We understand that the earth's resources are finite, and it is our responsibility to tread lightly while delivering exceptional textiles. That's why we are committed to sustainable practices that honor and protect our environment.
          From carefully sourcing eco-friendly materials to employing responsible manufacturing processes, we ensure that every step in our production journey aligns with nature's delicate balance. Our dedication to sustainability extends to our eco-conscious choices in packaging and distribution. We believe that by embracing the natural world and nurturing it, we can create textiles that not only enrich your life with comfort and style but also contribute to a greener, more sustainable future.
          By choosing BanoTextile, you're not just selecting high-quality fabrics and home textiles; you're choosing a company that values and respects the natural world. Join us in our journey to harmonize fashion with environmental responsibility, and together, let's celebrate the beauty and abundance of our planet.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      <NaturalProduct />
      
      
    </>
  );
};

export default Natural;
