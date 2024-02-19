import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const CostumizedProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Services Customized Products</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Customized Products: Your Unique Style, Our Craftsmanship</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              At BanoTextile, we believe that individuality is the essence of style, and our range of customized products is designed to let your unique personality shine. From tailored blazers and coats that make a statement to jackets and biker ensembles that exude rugged charm, our collection caters to diverse fashion preferences. We offer comfortable and stylish hoodies and tracksuits for those laid-back moments, and our Driyfit line ensures you stay active in ultimate comfort and style. Our range extends to accessories, including shoes, wallets, and belts that add the perfect finishing touch to your outfit. For those embracing Eastern fashion, our shalwar kameez and waistcoat/pent coat selections blend tradition with contemporary flair. And when it comes to life's most special occasions, our bridal wear and party wear collections radiate timeless beauty and glamour, ensuring you look and feel your best.
              </p>
            </TextContainer>
            <SubCat>
              <span>Blazers & Coats   </span>
              <span>Jackets & Biker ensembles</span>
              <span>hoodies & Tracksuits</span>
              <span>Driyfit & activewear</span>
              <span>Shoes, Wallets & Belts</span>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/CustomizedProducts/coat.jpg" alt="coat" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
          <Image src="/Images/CustomizedProducts/shoe.jpg" alt="shoe" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services Customized Products</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Explore Our Range of Customized Products:</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            BanoTextile is your destination for tailored perfection, offering customized blazers, coats, jackets, biker ensembles, hoodies, tracksuits, Driyfit activewear, shoes, wallets, belts, shalwar kameez, waistcoats, pent coats, bridal wear, and party wear. Each product is crafted with precision and attention to detail, ensuring that your style aspirations come to life in every stitch and seam. With our commitment to quality and personalized service, we're here to make sure that your fashion choices reflect your individuality and leave a lasting impression.
            </p>
          </TextContainer2>
          <SubCat2>
          
          </SubCat2>
        </Container2>
      </RowContainer2>
      
    </>
  );
};

export default CostumizedProduct;
