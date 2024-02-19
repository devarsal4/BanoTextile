import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const GarmentServicesProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Services Garments</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Garments: Elevating Your Style</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              At BanoTextile, garments are more than just clothing; they are a statement of style and comfort. Our commitment to crafting exceptional garments reflects in every stitch, ensuring that you not only look good but also feel great. Our diverse range of garments encompasses a wide spectrum of styles, from casual wear to formal attire, designed to cater to your unique fashion preferences. We understand that clothing is an extension of your personality, and that's why we pay meticulous attention to design, fabric selection, and manufacturing to deliver garments that elevate your style to new heights.
              </p>
            </TextContainer>
            <SubCat>
              <span>Hoodies</span>
              <span>TrackSuits</span>
              <span></span>
              <span></span>
              <span></span>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/GarmentServices/garments.jpg" alt="Garment" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
          <Image src="/Images/GarmentServices/hoddies.jpg" alt="Hoodie" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services Garments</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Hoodies and Tracksuits: Comfort Meets Fashion</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            For those seeking comfort without compromising on style, our hoodies and tracksuits are the perfect choice. Crafted with precision and made from the finest materials, our hoodies offer a cozy embrace, making them ideal for casual outings or lounging at home. Meanwhile, our tracksuits combine fashion-forward designs with performance-oriented features, ensuring that you not only look fashionable but also stay comfortable during your active pursuits. At BanoTextile, our hoodies and tracksuits are a testament to our dedication to blending comfort and fashion seamlessly, providing you with garments that are both trendy and functional.
            </p>
          </TextContainer2>
          <SubCat2>
            
          </SubCat2>
        </Container2>
      </RowContainer2>
          </>
  );
};

export default GarmentServicesProduct;
