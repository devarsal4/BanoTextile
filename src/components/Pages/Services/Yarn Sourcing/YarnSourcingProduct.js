import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const YarnSourcingProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Services Yarn Sourcing</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Yarn Sourcing: The Essence of Quality Textilesn</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              At BanoTextile, our commitment to delivering top-quality textiles begins with the meticulous sourcing of yarn. Yarn is the very thread that weaves the fabric of our products, and we understand its critical importance. Our yarn sourcing process is marked by precision, where we select the finest raw materials to create the foundation for our textiles. Whether it's for clothing, home textiles, or any other product in our diverse range, our dedication to sourcing the best yarn ensures that our textiles are not only visually appealing but also durable and comfortable. We partner with trusted suppliers and prioritize sustainability, reflecting our commitment to responsible sourcing practices.
              </p>
            </TextContainer>
            <SubCat>
              <span>Melange</span>
              <span>Grey</span>
              <span>Dyed</span>
              <span>Sewing Thread</span>
              <span></span>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/YarnSourcing/yarnsourcing1.jpg" alt="YarnSourcing" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
          <Image src="/Images/YarnSourcing/sewingthread.jpg" alt="SewingThread" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services Yarn Sourcing</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Melange, Grey, Dyed, and Sewing Thread: Versatility in Yarn Selection</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Our yarn sourcing encompasses a wide array of options to cater to diverse textile needs. Melange yarns offer a blend of colors, resulting in a unique mottled appearance, perfect for creating distinctive fashion pieces. Grey yarns, in their natural form, provide versatility, allowing for various dyeing and finishing processes to achieve the desired look and feel. Dyed yarns offer a vibrant palette, ensuring that our textiles come to life in a spectrum of colors. Additionally, our sewing thread yarns are meticulously chosen for their strength and durability, ensuring that every stitch holds together with reliability. At BanoTextile, our commitment to diverse yarn sourcing options means that we can cater to a wide range of textile requirements while maintaining the highest standards of quality and craftsmanship.
            </p>
          </TextContainer2>
          <SubCat2>
            
          </SubCat2>
        </Container2>
      </RowContainer2>
      
    </>
  );
};

export default YarnSourcingProduct;
