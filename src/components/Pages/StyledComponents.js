import styled, { keyframes } from 'styled-components';


export const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const slideInn = keyframes`
0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);a
    opacity: 1;
  }
`;
export const RowContainer1 = styled.div`
  display: flex;
  flex-direction: column; /* Change to column layout by default */
  justify-content: center;
  align-items: center;
  margin: 0 3vw;

  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row layout on larger screens */
  }
`;

export const Container = styled.div`
  background-color: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 8vw;
  border-radius: 10px;
  max-width: 800px;
  margin: 5vw auto;
  animation: ${slideInn} 1s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 38px;
    padding-left: 10px;
    order: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  max-width: 450px;
  animation: ${slideInn} 1s ease-in-out;
  order: 1;

  @media (min-width: 768px) {
    margin-left: 3vw;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  color: #fff;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

export const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 20px;
  padding-bottom: 90px;
`;

export const SubCat = styled.div`
  margin-left: 0px;
  margin-top: 120px;
  color: #a593ef;
  animation: ${slideInn} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  gap: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;


export const MainHead = styled.div`
  margin-left: 3vw;
  margin-top: 90px;
  color: #a593ef;
  animation: ${slideIn} 1s ease-in-out;
  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;

export const SubHead = styled.div`
  margin-left: 3vw;
  color: #A593EF;
  animation: ${slideInn} 1s ease-in-out;

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ImageContainerForOne = styled.div`
  
  max-width: 200px;
  animation: ${slideInn} 1s ease-in-out;
  
  margin-left: 10vw;

  @media (min-width: 768px) {
    margin-left: 3vw;
  }
`;
export const ImageContainerForTwo = styled.div`
  
  max-width: 200px;
  animation: ${slideInn} 1s ease-in-out;
  
  margin-left: 3vw;

  @media (min-width: 768px) {
    margin-left: 3vw;
  }
`;
export const RowContainer2 = styled.div`
  display: flex;
  flex-direction: column; /* Change to column layout by default */
  justify-content: center;
  align-items: center;
  margin: 0 3vw;

  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row layout on larger screens */
  }
`;

export const Container2 = styled.div`
  background-color: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 8vw;
  border-radius: 10px;
  max-width: 800px;
  margin: 5vw auto;
  animation: ${slideInn} 1s ease-in-out;

  @media (min-width: 768px) {
    flex: 1; /* Add this line to make flex properties work */
    margin-right: 38px; /* Updated margin-right */
    padding-right: 10px; /* Updated padding-right */
    order: 1; /* Set the order to 1 to move it to the right on larger screens */
  }
`;

export const ImageContainer2 = styled.div`
  display: flex;
  max-width: 450px;
  animation: ${slideInn} 1s ease-in-out;
  order: 0; /* Set the order to 0 to move it to the left on larger screens */

  @media (min-width: 768px) {
    margin-left: 3vw;
  }
`;

export const TextContainer2 = styled.div`
  flex: 1;
  color: #fff;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

export const SubCat2 = styled.div`
  margin-left: 0px;
  margin-top: 120px;
  color: #a593ef;
  animation: ${slideInn} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  gap: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const MainHead2 = styled.div`
  margin-left: 2vw;
  margin-top: 10px;
  color: #a593ef;
  animation: ${slideIn} 1s ease-in-out;
  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;

export const SubHead2 = styled.div`
  margin-right: 3vw;
  color: #A593EF;
  animation: ${slideInn} 1s ease-in-out;

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;
export const AllHeaders = styled.div`
color: #A593EF;
`;