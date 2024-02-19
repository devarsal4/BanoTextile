import React from 'react';
import { LightColor,MainHead,SubHead,SubHead2,SubCat,SubCat2, RowContainer1,RowContainer2,TextContainer,TextContainer2,Container,Container2, Image,ImageContainer,ImageContainer2,ImageContainerForOne,ImageContainerForTwo, MainHead2 } from '../../StyledComponents';

const ConsultancyProduct = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <LightColor>
        <MainHead>
          <h1>Services-Consultancy</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Comprehensive Consultancy Services: Guiding Your Path to Success</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              At BanoTextile, we offer a range of consultancy services designed to support your organization's success, just as we provide everything necessary to create a superb room experience through our textile offerings. Our consultancy services are tailored to meet your specific needs and requirements, ensuring that you have the guidance and expertise necessary to excel in your endeavors.
              </p>
            </TextContainer>
            <SubCat>
              <span>EFS Registration Support</span>
              <span>Import/Export Assistance</span>
              <span>Certification Preparation:</span>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/1stone.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
            <Image src="/Images/Consultancy/1.jpg" alt="Consultancy" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      

      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/Consultancy/2.jpg" alt="Consultancy" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/2ndtwo.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services-Consultancy</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>EFS Registration Support</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Environmental, Health, and Safety (EFS) registration is crucial for organizations committed to responsible and sustainable practices. We provide comprehensive support to help your organization navigate the EFS registration process, ensuring that you meet all requirements and adhere to the highest standards of safety and environmental responsibility.
            </p>
          </TextContainer2>
          <SubCat2>
          </SubCat2>
        </Container2>
      </RowContainer2>
      <LightColor>
      <MainHead>
          <h1>Services-Consultancy</h1>
        </MainHead>
        <br />
        <br />
        <br />
        <br />
        <SubHead>
          <h3>Import/Export Assistance</h3>
        </SubHead>

        <RowContainer1>
          <Container>
            <TextContainer>
              <p>
              International trade is a key aspect of many organizations' operations. Our consultancy services extend to import and export assistance, providing guidance on trade regulations, customs compliance, documentation, and logistics. We help streamline your import and export processes to ensure efficient and compliant operations.
              </p>
            </TextContainer>
            <SubCat>
            </SubCat>
          </Container>
          <ImageContainerForOne>
          <Image src="/Images/3rdthree.png" alt="Yarn" />
          </ImageContainerForOne>
          <ImageContainer>
          <Image src="/Images/Consultancy/3.jpg" alt="Consultancy" />
          </ImageContainer>
        </RowContainer1>
      </LightColor>
      <RowContainer2>
        <ImageContainer2>
        <Image src="/Images/Consultancy/4.jpg" alt="Consultancy" />
        </ImageContainer2>
        <ImageContainerForTwo>
          <Image src="/Images/4thfour.png" alt="Yarn" />
        </ImageContainerForTwo>
        <Container2>
          <MainHead2>
            <h1>Services-Consultancy</h1>
          </MainHead2>
          <br />
          <br />
          <br />
          <br />
          <SubHead2>
            <h3>Certification Preparation</h3>
          </SubHead2>
          <br />
          <br />
          <br />
          <br />
          <TextContainer2>
            <p>
            Achieving various certifications is a testament to your organization's commitment to quality, ethics, and compliance. We offer support in preparing for certifications that align with your industry and objectives. Whether it's ISO, industry-specific certifications, or others, we provide the guidance and resources you need to excel.
            </p>
          </TextContainer2>
          <SubCat2>
          </SubCat2>
        </Container2>
      </RowContainer2>
    </>
  );
};

export default ConsultancyProduct;
