import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const Product = () => {
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
          <h3>Yarn: Crafting Excellence from the Beginning</h3>
        </SubHead>

        <RowContainer1>
        <Container>
          <TextContainer>
            <p>
              At BanoTextile, we understand that every exceptional textile starts with the finest yarn. Our commitment to crafting excellence begins with the careful selection of yarns that serve as the building blocks of our products. From natural fibers that offer softness and breathability to synthetic materials that provide durability and versatility, our yarns are chosen for their unique attributes. We take pride in offering the broadest scope of options, from foundational yarns that form the basis of everyday textiles to luxurious blends that epitomize opulence. Our yarns span from classic whites and solids to innovative, carefully printed technologies, ensuring that we cover the widest spectrum available in the market.
            </p>
          </TextContainer>
          <SubCat>
            <span>Crafted Excellence</span>
            <span>Versatile Selection</span>
          </SubCat>
        </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/Products/Yarn/yarn2.jpg" alt="Yarn" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/Products/Yarn/yarn3.jpg" alt="Yarn" />
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
            <h3>Crafted Excellence</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            At BanoTextile, we take immense pride in our dedication to crafting excellence from the very beginning, starting with the selection of the finest yarn. Our commitment to quality and craftsmanship is woven into every fiber, ensuring that our textiles are a testament to excellence. With meticulous attention to detail and an unwavering focus on creating products that exceed expectations, our yarns are the foundation of our exceptional textiles.
            We believe that the journey of creating textiles begins with the artistry and expertise that goes into selecting and processing yarn. Our dedication to crafting excellence is reflected in the superior quality and durability of our products, ensuring that they not only meet but also surpass your desires for quality and comfort.
            When you choose BanoTextile, you're choosing textiles that have been crafted with the utmost care and expertise, resulting in products that stand the test of time and elevate your living spaces. Explore our collection and experience the difference that "Crafted Excellence" makes in every textile we offer.
            </p>
          </TextContainer2>
          <SubCat2>
          </SubCat2>
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
          <h3>Versatile Selection</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              BanoTextile takes pride in offering a versatile selection of yarns that cater to a wide range of creative needs and preferences. We understand that each project and textile has its unique demands, and our commitment to versatility ensures that we have the right yarn for every application.
              Our selection encompasses a diverse array of yarn materials, each chosen for its distinct qualities, from the softness and breathability of natural fibers to the durability and adaptability of synthetic materials. Whether you seek yarns for everyday essentials or specialty blends that exude luxury, our versatile range accommodates your specific requirements.
              With a palette that spans from classic whites and solids to innovative, carefully printed technologies, we provide a comprehensive selection that invites exploration and customization. BanoTextile's versatile selection empowers you to bring your creative visions to life, ensuring that your textiles not only meet but also exceed your expectations. Explore our diverse collection and discover the limitless possibilities that our "Versatile Selection" offers for your projects and applications.
              </p>
            </TextContainer>
            <SubCat></SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/3rdthree.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/Yarn/yarn4.jpg" alt="Yarn" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
    </>
  );
};

export default Product;
