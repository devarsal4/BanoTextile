import React from 'react';
import styled, { keyframes } from 'styled-components';
import HomeTextileProduct from './HomeTextileProduct';

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
  margin-left: 13vw;
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
const HomeTextile = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Home-Textile
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Products/HomeTextile/1.jpg" alt="HomeTextile" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          At BanoTextile, we take pride in transforming houses into homes with our exquisite range of home textiles. Our collection is meticulously crafted to enhance the comfort, style, and functionality of every living space. Whether you're looking to create a cozy bedroom retreat, a welcoming living room, or a captivating dining area, our home textiles offer a wide array of options to suit your unique preferences and needs.
          Beyond aesthetics, our textiles are crafted with the utmost care for your comfort and well-being. We embrace eco-friendly practices and offer sustainable options for those who prioritize environmental consciousness. Our home textiles are a testament to our dedication to making your living spaces truly inviting and stylish. Explore our collection and experience the difference that BanoTextile brings to home textiles. Welcome the warmth, comfort, and beauty of our products into your home, and let us be a part of your journey in creating spaces that reflect your unique lifestyle and personality.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      <HomeTextileProduct />
      
      
    </>
  );
};

export default HomeTextile;
