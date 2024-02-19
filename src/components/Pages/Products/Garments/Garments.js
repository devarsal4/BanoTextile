import React from 'react';
import styled, { keyframes } from 'styled-components';
import GarmentProduct from './GarmentProduct';

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
const Garments = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Garments
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/GarmentServices/garments.jpg" alt="Garments" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          The textile industry serves as the creative heart and functional backbone of the global fashion landscape. Garments, the final outcome of this intricate and dynamic industry, embody the culmination of artistry, innovation, and craftsmanship. These wearable works of art not only reflect the ever-evolving trends and styles that capture our imagination but also provide us with the means to express our individuality and cultural identity.
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <GarmentProduct />
      
      
    </>
  );
};

export default Garments;
