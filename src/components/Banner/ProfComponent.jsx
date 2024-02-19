import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import VideoPlayer from "../Video/VideoPlayer";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  @media (max-width: 840px) {
    margin-left: 3rem;
    margin-top: 0rem;
    font-size: 1rem;
  }

  @media (max-width: 650px) {
    margin-left: 3rem;
    margin-top: 0rem;
    font-size: 1rem;
  }
  h1 {
    color: #8c6b3b;
    font-size: 2.5rem;
    margin-bottom: 10px;
    @media (max-width: 840px) {
      margin-left: 3rem;
      margin-top: 2rem;
      font-size: 1rem;
    }
  
    @media (max-width: 650px) {
      margin-left: 3rem;
      margin-top: 2rem;
      font-size: 1rem;
    }
  }

  h3,
  p {
    position: relative;
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 10px;
    @media (max-width: 840px) {
      margin-left: 0rem;
      margin-top: 0rem;
      font-size: 1rem;
    }
  
    @media (max-width: 650px) {
      margin-left: 0rem;
      margin-top: 0rem;
      font-size: 1rem;
    }
  }

  h3::before,
  p::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #ffd700;
    z-index: -1;
  }
`;

const ProfComponent = () => {
  return (
    <HeroContainer id="home">
      <VideoPlayer />

      <TextContainer>
        <Slide direction="left">
          <>
            <h1 className="green">BanoTextile</h1>
            <h3>Let's move towards Sustainable Textiles</h3>
            <p>Sustainable & scalable textile solutions with global reach</p>
          </>
        </Slide>
      </TextContainer>
    </HeroContainer>
  );
};

export default ProfComponent;
