import React from 'react';
import styled, { keyframes } from 'styled-components';
import SynthaticProduct from './SynthaticProduct';

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
  margin-left: 14vw;
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


const Synthatic = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Synthatic
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
      <Image src="/Images/Products/Synthetic/1.jpg" alt="Synthetic" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          At BanoTextile, we harness the power of synthetic materials to create textiles that redefine comfort, durability, and versatility. Synthetic fibers have revolutionized the textile industry, offering a wide range of benefits that cater to modern lifestyles. We understand the importance of innovation and choice, and our synthetic collection embodies these principles.
          From the strength and resilience of polyester to the moisture-wicking properties of nylon, our synthetic textiles are designed to meet the demands of today's dynamic world. Whether it's creating activewear that keeps you cool during workouts or durable upholstery fabrics that withstand the test of time, we embrace the potential of synthetic materials.
          Our commitment to sustainability extends to our synthetic collection as well, as we explore eco-friendly options and responsible manufacturing processes. By choosing BanoTextile's synthetic textiles, you're not just experiencing the advantages of modern materials; you're also embracing a future where innovation meets sustainability. Explore our synthetic marvels and discover the limitless possibilities that these materials bring to your life and living spaces.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      <SynthaticProduct />
      
      
    </>
  );
};

export default Synthatic;
