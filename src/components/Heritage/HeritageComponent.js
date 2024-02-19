import React from 'react';
import styled from 'styled-components';

const HeritageComponent = () => {
  return (
    <Container>
      <LeftContent>
        <BoldText>We All <br />Start<br />Smart</BoldText>
        <MediumBoldText>And then we grow</MediumBoldText>
        <Button>
          Explore our heritage
          <ArrowIcon>&rarr;</ArrowIcon>
        </Button>
      </LeftContent>
      <RightImage src="/Images/cotton.jpeg" alt="Heritage Image" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center; /* Center content vertically */
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 80%; /* Full width */
  margin-left: 150px;
  padding-top: 30px;
  padding-botton: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack components in a column on smaller screens */
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  color: #a593ef;
  margin-right: 20px;
  padding-left: 20px; /* Add left padding to create space */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding-left: 0; /* Remove left padding on smaller screens */
  }
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 28px;
  padding-top: 30px; /* Corrected the typo */
  margin-bottom: 8px; /* Decreased the margin */
  text-align: left; /* Align text to the left */
`;

const MediumBoldText = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 16px; /* Decreased the margin */
  text-align: left; /* Align text to the left */
`;

const Button = styled.button`
  background-color: #fff;
  color: #A593EF;
  border: #A593EF;
  border-radius: 10px;
  padding: 12px 12px; /* Adjusted padding to match the text size */
  font-weight: medium;
  font-size: 18px;
  cursor: pointer;
  display: inline-grid;
  align-items: center;

  &:hover {
    background-color: #A593EF;
    color: #fff;
  }
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
`;

const RightImage = styled.img`
  width: 50%; /* Full width */
  height: auto;
  border-radius: 15px;
`;

export default HeritageComponent;
