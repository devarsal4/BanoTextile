import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2,AllHeaders } from '../../StyledComponents';

const NaturalProduct = () => {
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
          <h3>Natural</h3>
        </SubHead>

        <RowContainer1>
        <Container>
          <TextContainer>
            <p>
              At BanoTextile, our commitment to natural beauty extends to every aspect of your living spaces. We offer a wide range of textiles that not only enhance your room's appeal but also embrace the natural world. From sheets, pillowcases, and duvet covers that cradle you in organic comfort to draping shades that filter natural light gracefully, our collection harmonizes your surroundings with the environment. We take pride in providing the broadest selection, from fundamental textures that evoke earthy simplicity to top-of-the-line extravagance inspired by the beauty of nature. Whether it's the pure elegance of whites and solids or the intricate patterns of carefully printed designs, our textiles celebrate the boundless wonders of the natural world, bringing them into your home with style and sustainability.
            </p>
          </TextContainer>
          <SubCat>
            <span>Organic Comfort</span>
           <span>Nature-Inspired Designs</span>
          </SubCat>
        </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/Natural/2.jpg" alt="Natural" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/Products/Natural/3.jpg" alt="Natural" />
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
            <h3>Organic Comfort</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Our commitment to your well-being and the environment is evident in our <AllHeaders>"Organic Comfort"</AllHeaders> collection at BanoTextile. We understand the importance of a good night's sleep and the role that bedding plays in achieving it. That's why we offer a range of organic textiles that provide not only unparalleled comfort but also peace of mind. Crafted from natural, eco-friendly materials, our organic sheets, pillowcases, and duvet covers cradle you in the purest, chemical-free luxury. Sleep soundly knowing that you are cocooned in fabrics that are kind to your skin and gentle on the planet.
            In our "Organic Comfort" collection, we prioritize sustainability, choosing materials that are free from harmful chemicals and pesticides. The result is bedding that is not only soft and breathable but also safe and hypoallergenic. Experience the pleasure of sleeping in harmony with nature, where every thread tells a story of well-being and eco-consciousness. Explore our organic comfort textiles and elevate your sleep quality while embracing a healthier, more sustainable lifestyle.
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
          <h3>Nature-Inspired Designs</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              Discover the enchanting beauty of the natural world woven into every thread of our <AllHeaders>"Nature-Inspired Designs"</AllHeaders>collection at BanoTextile. We draw inspiration from the wonders of nature to bring you textiles that capture the essence of the great outdoors. From patterns reminiscent of lush forests and delicate flora to prints inspired by the colors of the changing seasons, our designs transport the serenity and vitality of nature into your living spaces.
              In our <AllHeaders>"Nature-Inspired Designs"</AllHeaders> collection, you'll find an array of textiles that infuse your surroundings with the tranquility and vibrancy found in the natural world. Whether it's the calming shades of blues and greens or the bold contrasts of earthy tones, our designs reflect the diverse landscapes and elements of our planet. Each textile tells a unique story, inviting you to embrace the beauty of nature in your home decor. Experience the harmony of the outdoors brought indoors with our nature-inspired textiles, and let your living spaces come alive with the colors and patterns that resonate with the world outside. Explore our collection and bring a touch of nature's magic to your home.
              </p>
            </TextContainer>
            <SubCat>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/3rdthree.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/Natural/4.jpg" alt="Natural" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
    </>
  );
};

export default NaturalProduct;
