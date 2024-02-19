import React from 'react';
import styled, { keyframes } from 'styled-components';
import YarnProduct from './YarnProduct';

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
  margin-left: 7vw;
  color: #A593EF;
  margin-top: 10vw;
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
const Yarn = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
        Yarn: Crafting Excellence from the Beginning
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Products/Yarn/yarn1.jpg" alt="Yarn" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          At BanoTextile, we understand that the foundation of exceptional textiles lies in the quality of the yarn. With unwavering dedication to excellence, we carefully source and select the finest yarns to create fabrics that are a testament to craftsmanship and quality.
          Our yarns come in a variety of materials, each chosen for its unique attributes. Whether it's the softness and breathability of natural fibers like cotton and linen, the resilience of synthetic materials, or the luxury of specialty blends, we ensure that our yarns meet the highest standards.
          Our commitment to sustainability extends to our yarn selection, as we explore eco-friendly options and responsible sourcing practices. We believe that the journey of creating textiles begins with the yarn, and by choosing the best, we lay the foundation for textiles that are not only visually stunning but also durable and environmentally conscious.
          When you choose BanoTextile, you're choosing textiles that have excellence woven into every fiber. Join us in celebrating the artistry and craftsmanship that starts with the yarn, and experience the difference that exceptional quality makes in your living spaces. Explore our collection and discover how we craft excellence from the very beginning.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />

      <YarnProduct />
      
      
    </>
  );
};

export default Yarn;
