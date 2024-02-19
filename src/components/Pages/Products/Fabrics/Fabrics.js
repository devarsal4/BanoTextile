import React from 'react';
import styled, { keyframes } from 'styled-components';
import FabricProduct from './FabricProduct';

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
const slideInn = keyframes`
0% {
    transform: translateY(100%);
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
   /* Add some space on the left for larger screens */
  max-width: 450px;
  animation: ${slideIn} 1s ease-in-out;
  margin-right: 3vw;
`;

const RowContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3vw; /* Adjust margin for both sides */
  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout on small screens */
    margin: 0; /* Remove margin on small screens */
  }
`;

const Container = styled.div`
  background-color: #191923;
  padding: 8vw;
  border-radius: 10px;
  max-width: 800px;
  margin-left: 38px;
  padding-left: 10px;
  animation: ${slideInn} 1s ease-in-out;
  order: 0; /* Set the order to 0 to move it to the left on larger screens */
  @media (max-width: 768px) {
    margin-left: 0; /* Remove margin on small screens */
    flex-direction: column; /* Change to column layout on small screens */
    margin: 5vw auto;
    order: 1; /* Reset the order on smaller screens */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-left: 3vw; /* Add some space on the left for larger screens */
  max-width: 450px;
  animation: ${slideInn} 1s ease-in-out;
  order: 1; /* Set the order to 1 to move it to the right on larger screens */
`;

const Head = styled.div`
  margin-left: 13vw;
  margin-top: 3vw;
  color: #A593EF;
  animation: ${slideIn} 1s ease-in-out;
`

const Head1 = styled.div`
  margin-left: 81vw;
  color: #A593EF;
  animation: ${slideInn} 1s ease-in-out;
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
const Fabrics = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColorMain>
      <Head>
        <h1>
            Fabrics 
        </h1>
      </Head>
      <br />
      <br />
      <br />
      <RowContainer>
      <ImageContainer1>
          <Image src="/Images/Fabrics/fabric3.jpeg" alt="Fabric" />
        </ImageContainer1>
      <YarnContainer>
        <TextContainer>
          <p>
          Fabrics are versatile materials that play a vital role in our daily lives. They come in various forms, from natural fibers like cotton and silk to synthetic materials such as polyester and nylon, each with its unique characteristics and applications. Fabrics are essential in clothing, interior design, and numerous industrial sectors. Understanding their properties, including texture, durability, breathability, and colorfastness, is crucial for making informed choices. Moreover, as sustainability becomes increasingly important, eco-friendly fabric options like organic cotton and recycled materials are gaining popularity. Fabrics are not just functional; they are also a creative and expressive medium, allowing us to showcase personal style and individuality in the clothes we wear and the spaces we inhabit.
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
      <Head1>
        <h1>Fabrics</h1>
      </Head1>
      <br />
      <br />
      <br />
      <RowContainer1>
      <Container>
        <TextContainer>
          <p>
          Fabrics, in essence, are a testament to human ingenuity and creativity. Throughout history, civilizations have harnessed the potential of different materials to craft fabrics that cater to their specific needs and desires. From ancient Egyptians using linen for mummification cloths to indigenous cultures creating intricate patterns on handwoven textiles, fabrics have played a profound role in cultural expression and identity. Today, the textile industry continues to evolve with cutting-edge advancements, including smart fabrics embedded with technology for health monitoring or energy generation. Fabrics also hold a unique place in the sustainability movement, with innovations in recycling and upcycling materials, reducing waste, and embracing environmentally conscious practices. As we navigate the challenges of the modern world, fabrics remain a canvas for creativity, a symbol of cultural heritage, and a driving force behind sustainable progress.
          </p>
        </TextContainer>
      </Container>
      <ImageContainer>
          <Image src="/Images/Fabrics/fabric4.jpeg" alt="Fabric" />
        </ImageContainer>
      </RowContainer1>
      <br />
      <br />
      <br />
      <FabricProduct />
      
      
    </>
  );
};

export default Fabrics;
