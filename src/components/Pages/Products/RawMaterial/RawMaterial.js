import React from 'react';
import styled, { keyframes } from 'styled-components';
import RawMaterialProduct from './RawMaterialProduct';

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
  margin-left: 18vw;
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


const RawMaterial = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Raw Material
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Products/RawMaterial/1.jpg" alt="RawMaterial" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          At BanoTextile, our journey towards creating exceptional textiles begins with the careful selection of the finest raw materials. We understand that the quality of our end products is deeply rooted in the quality of the materials we use. With a commitment to sustainability and excellence, we source our raw materials from reputable suppliers who share our values.
          From natural fibers like cotton and linen to synthetic materials that offer durability and versatility, our raw material selection is guided by a dedication to creating textiles that meet the highest standards. We believe in transparency and responsible sourcing, ensuring that our materials are ethically and environmentally sound. This commitment not only guarantees the quality of our products but also reflects our responsibility towards the planet and the communities we serve.
          Every thread, every fiber, and every material that goes into our textiles is chosen with care, ensuring that when you choose BanoTextile, you are choosing a product that is made from the very best raw materials available. Join us in our journey to create textiles that are not only beautiful but also ethical and sustainable, as we transform raw materials into works of art that enrich your life and embrace the future.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      
      <RawMaterialProduct />
      
      
    </>
  );
};

export default RawMaterial;
