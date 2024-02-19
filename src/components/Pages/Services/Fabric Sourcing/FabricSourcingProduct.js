import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const FabricSourcingProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Services Fabric Sourcing</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Fabric Sourcing: The Foundation of Quality</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              At BanoTextile, fabric sourcing is a meticulous process that forms the foundation of our commitment to quality. We understand that the key to creating exceptional textiles lies in the selection of premium materials. Our rigorous sourcing practices ensure that we procure fabrics of the highest caliber, guaranteeing durability, comfort, and aesthetic appeal in every product we offer. With an extensive network of trusted suppliers and a keen eye for quality, our dedication to sourcing excellence enables us to consistently deliver textiles that meet and exceed our customers' expectations.
              </p>
            </TextContainer>
            <SubCat>
              <span>Home Textile</span>
              <span>Knitted</span>
              <span>

              </span>
              <span></span>
              <span></span>
              <span></span>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/FabricSourcing/hometextile.jpg" alt="hometextile" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
          <Image src="/Images/FabricSourcing/knitted.jpg" alt="Knitted" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services Fabric Sourcing</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Home Textile and Knitted Fabrics: Quality Redefined</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            In the realm of home textiles, our commitment to fabric sourcing is unwavering. Whether it's for bed linens, curtains, or other home decor essentials, we carefully select fabrics that offer both elegance and functionality. Our knitted fabrics, on the other hand, exemplify our dedication to comfort and versatility. These fabrics, sourced with precision, are the building blocks of cozy loungewear, activewear, and a wide range of apparel. At BanoTextile, our fabric sourcing expertise ensures that every textile, whether for your home or wardrobe, is a testament to quality and style.
            </p>
          </TextContainer2>
          <SubCat2>
            
          </SubCat2>
        </Container2>
      </RowContainer2>
      
    </>
  );
};

export default FabricSourcingProduct;
