import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #191923; /* Updated background color */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease; /* Added animation */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const LeftText = styled.div`
  flex: 1;
  padding: 0 2rem;
  color: #fff; /* Updated text color */

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const CenterImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    order: -1;
  }
`;

const RightText = styled.div`
  flex: 1;
  padding: 0 2rem;
  color: #fff; /* Updated text color */

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const TextBlock = styled.div`
  margin-bottom: 1rem;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
  color: #A593EF;
`;

const Text = styled.span`
  font-size: 1rem;
  display: block;
`;

const HeaderText = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #A593EF;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const DiscoverLink = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #A593EF;
`;

const ArrowIcon = styled.span`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

const TextWithImage = () => {
  return (
    <Container>
      <LeftText>
        <TextBlock>
          <BoldText>4,500</BoldText>
          <Text>tons of yarn / month</Text>
        </TextBlock>

        <TextBlock>
          <BoldText>7,000,000</BoldText>
          <Text>meters fabric woven / month</Text>
        </TextBlock>

        <TextBlock>
          <BoldText>7,000,000</BoldText>
          <Text>meters fabric processed / month</Text>
        </TextBlock>
      </LeftText>

      <CenterImage>
      <img src="/Images/txtimg.png" alt="Your Alt Text" />

      </CenterImage>

      <RightText>
        <HeaderText>Adding Value to Textile</HeaderText>
        <Paragraph>
          We are one of the largest manufacturers and exporters of textile products in Pakistan. We acquire technology from Europe, Japan, and the USA. The main raw material, Cotton, is sourced locally, and specialized fibers are imported.
        </Paragraph>

        <DiscoverLink>
          Discover our Culture
          <ArrowIcon>&rarr;</ArrowIcon>
        </DiscoverLink>
      </RightText>
    </Container>
  );
};

export default TextWithImage;
