import React from 'react';
import styled, { keyframes } from 'styled-components';
import FinishingProduct from './FinishingProduct';

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
const Finishing = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Garments & Fabrics Finishing
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Products/Finishing/1.jpg" alt="Finishing" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          Garment and fabric finishing are the essential final steps in the textile production process, ensuring that textiles meet both aesthetic and functional requirements. Fabric finishing techniques encompass an array of processes that transform raw textiles into finished products. These processes may include dyeing, printing, and adding various finishes, such as wrinkle resistance or water repellency. Garment finishing, on the other hand, involves the assembly of cut fabric pieces into the final wearable form, often including sewing, stitching, and the addition of fasteners and embellishments.
          </p>
          <p>
          The choice of finishing techniques can greatly influence the quality and appearance of textiles and garments. For instance, fabric dyeing and printing allow for a wide range of colors and patterns, while treatments like stain resistance make fabrics more practical for everyday use. Garment finishing not only ensures that clothing items are well-constructed and comfortable but also gives them their unique style and design. In the ever-evolving world of fashion and textiles, innovative finishing techniques are continuously being developed to meet the demands of consumers who seek both functionality and aesthetics in their clothing and fabrics. 
          </p>
        </TextContainer>
      </YarnContainer>
      </RowContainer>
      
      </LightColorMain>
      
      <br />
      <br />
      <br />
      
      <FinishingProduct />
      
      
    </>
  );
};

export default Finishing;
