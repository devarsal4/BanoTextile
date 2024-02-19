import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const HomeTextileProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Product Range</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Home Textile</h3>
        </SubHead>

        <RowContainer1>
        <Container>
          <TextContainer>
            <p>
              Elevate your living space with our comprehensive range of home textile solutions. From bedding essentials like sheets, pillowcases, and duvet covers to window treatments that include drapes and shades, we have a solution for every aspect of your home decor. Our product line encompasses a wide spectrum, from foundational fabrics to luxurious options, spanning from classic neutrals to vibrant prints and incorporating the latest in textile technology. We take pride in offering an extensive selection that caters to all your home textile needs.
            </p>
          </TextContainer>
          <SubCat>
            <span>Bedding Essentials</span>
           <span>Window Treatments</span>
          </SubCat>
        </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/HomeTextile/3.jpg" alt="HomeTextile" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/Products/HomeTextile/4.jpg" alt="HomeTextile" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Product Range</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Bedding Essentials</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Elevate your bedroom to a haven of comfort and style with our exquisite bedding essentials at BanoTextile. Our collection includes a comprehensive range of soft and breathable sheets, pillowcases, and duvet covers, designed to enhance both your sleep quality and bedroom decor. With a wide selection of fabrics, colors, and patterns, from timeless neutrals to captivating prints, we offer bedding solutions that cater to your unique tastes. Crafted with meticulous attention to detail and quality, our bedding essentials ensure not only a visually inviting bedroom but also an exceptionally luxurious feel. Transform your bedroom into a dreamy retreat that invites relaxation and rejuvenation, and experience the difference that exceptional bedding can make in your daily life.
            </p>
          </TextContainer2>
        </Container2>
      </RowContainer2>
      <LightColor>
      <MainHead>
          <h1>Product Range</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Window Treatments</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              Enhance the ambiance and style of your living spaces with BanoTextile's exquisite collection of window treatments. Our carefully curated range includes drapes, curtains, and shades, designed to not only beautify your decor but also provide essential privacy, light control, and insulation. With a wide variety of fabrics, colors, and styles, from classic to contemporary, our window treatments are crafted with meticulous attention to detail, ensuring they hang gracefully and seamlessly integrate with your interior design. Whether you prefer the timeless elegance of drapes, the refined sophistication of curtains, or the practicality of shades, our selection caters to your preferences. Embrace natural light or create a cozy ambiance effortlessly, as our window treatments frame your view and add a touch of personalized style to your living spaces. Explore our range and experience how the right window treatments can elevate both aesthetics and functionality in your home.
              </p>
            </TextContainer>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/3rdthree.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/HomeTextile/2.jpg" alt="HomeTextile" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
    </>
  );
};

export default HomeTextileProduct;
