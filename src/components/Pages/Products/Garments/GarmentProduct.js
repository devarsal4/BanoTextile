import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const GarmentProduct = () => {
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
          <h3>Garments</h3>
        </SubHead>

        <RowContainer1>
        <Container>
          <TextContainer>
            <p>
              Explore our comprehensive collection, where we offer everything you need to enhance your wardrobe with style and functionality. From everyday essentials to high-end luxury pieces, we have a diverse range of garments that cater to your unique fashion needs. Our selection spans from classic staples to innovative designs, ensuring that you find the perfect outfit for every occasion.
            </p>
          </TextContainer>
            <SubCat>
              <span>Casual Wear</span>
              <span>Formal Attire</span>
              <span>Activewear</span>
            </SubCat>
        </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/GarmentServices/garments.jpg" alt="Garments" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/GarmentServices/hoddies.jpg" alt="Garments" />
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
            <h3>Casual Wear</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Casual wear represents the essence of everyday comfort and relaxed style. Our collection of casual garments is designed to provide you with the perfect blend of comfort, versatility, and fashion-forward choices for your daily activities. From cozy t-shirts and laid-back jeans to comfortable dresses and stylish athleisure, our casual wear range embraces a spectrum of possibilities. Whether you're running errands, meeting friends, or simply enjoying a leisurely day, our casual wear ensures you look effortlessly chic while feeling at ease. With a focus on quality materials and timeless designs, we offer a selection that effortlessly blends comfort with fashion, allowing you to express your individuality with ease and confidence. Explore our casual wear collection, where comfort meets style, and where every outfit effortlessly reflects your unique personality.
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
          <h3>Formal Attire</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              Formal attire embodies sophistication, elegance, and a timeless sense of occasion. Our collection of formal garments is meticulously curated to ensure you make a lasting impression at any special event or professional gathering. Whether you're attending a gala, wedding, or a corporate affair, our formal attire range offers a selection of impeccably tailored suits, elegant gowns, and refined accessories. Each piece is crafted with attention to detail, using premium fabrics and designs that exude refinement. From classic black-tie ensembles to modern interpretations of formal wear, we cater to a variety of tastes and preferences. When you choose our formal attire, you're not just wearing clothing; you're making a statement of confidence, sophistication, and a commitment to timeless style. Elevate your presence and create a lasting memory with our exquisite collection of formal garments, where every detail is tailored to perfection.
              </p>
            </TextContainer>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/3rdthree.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Products/Natural/4.jpg" alt="Garments" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/GarmentServices/activewear.jpg" alt="Garments" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/4thfour.png" alt="Yarn" />
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
            <h3>Activewear</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Activewear represents the perfect fusion of comfort, functionality, and style for those leading active lifestyles. Our activewear collection is designed to keep you motivated, whether you're hitting the gym, going for a run, or simply embracing a more active daily routine. Crafted from high-performance fabrics, our activewear pieces offer moisture-wicking properties, breathability, and flexibility to enhance your workout experience. From sporty leggings and supportive sports bras to lightweight, moisture-wicking tops and versatile athleisure sets, we provide a range of options to suit various fitness regimens and preferences.
            Beyond the gym, our activewear seamlessly transitions into your daily life, allowing you to move effortlessly from exercise to errands without compromising on style. With attention to both functionality and fashion, our activewear collection empowers you to look and feel your best as you pursue an active and healthy lifestyle. Explore our activewear range, where innovation meets comfort, and where every piece is designed to inspire confidence and motivation on your fitness journey.
            </p>
          </TextContainer2>
        </Container2>
      </RowContainer2>
    </>
  );
};

export default GarmentProduct;
