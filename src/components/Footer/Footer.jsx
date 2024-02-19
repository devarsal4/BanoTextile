// Footer.jsxAiFillGithub
import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";


const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container id="footer">
      <LeftSection>
        {/* Company Logo */}
        <LogoContainer>
          <img src="/Images/logo.png" alt="Company Logo" />
        </LogoContainer>

        {/* Company Info */}
        <CompanyInfo>
           <p>
             <FaMapMarkerAlt /> Civil Line Faisalabad
           </p>
           <p>
             <FaPhone /> +92 316 7074185
           </p>
           <p>
             <FaRegEnvelope /> B-3, 18 Bilal Road, Faisal Complex, Civil Line Faisalabad
           </p>
           <p>&copy; {new Date().getFullYear()} BanoTextile – All Rights Reserved</p>
        </CompanyInfo>

      </LeftSection>

      {/* Navigation Links */}
     
      <NavSection>
        <Slide direction="left">
          <h1>Explore</h1>
        </Slide>
        {/* Add your navigation links here */}
        <NavLinks>
          <br />
          <br />
          <br />
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </NavLinks>
      </NavSection>

      {/* Social Media Links */}
      <LogoContainer1>
          <img src="/Images/jama.png" alt="JamaPunji" />
        </LogoContainer1>

      <SocialMediaSection>
        <Zoom>
          <span>
            <a href="/">
              <BsFacebook />
            </a>
          </span>
        </Zoom>
        <Zoom>
          <span>
            <a href="/">
              <AiFillLinkedin />
            </a>
          </span>
        </Zoom>
        <Zoom>
          <span>
            <a href="/">
              <BsSlack />
            </a>
          </span>
        </Zoom>
      </SocialMediaSection>

      {/* Scroll Up Button */}
      <Fade>
        <ArrowUp onClick={scrollUp}>
          <AiOutlineArrowUp />
        </ArrowUp>
      </Fade>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  img {
    width: 300px;
    height: auto;
    border-radius: 50px;
  }
`;
const LogoContainer1 = styled.div`
  img {
    width: 80px;
    height: 50px;
    border-radius: 10px;
    margin-left: 20rem;
    margin-top:8rem;
    @media (max-width: 840px) {
      margin-left: 8rem;
      margin-top: 1rem;
    }
  
    @media (max-width: 650px) {
      margin-left: 8rem;
      margin-top: 1rem;
    }
  }

 
`;

const CompanyInfo = styled.div`
  padding-top: 1rem;
  color: lightgray;
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    margin-left: 5rem;
  }
`;

const NavSection = styled.div`
  flex: 1;
  margin-left: 18rem;
  margin-top: 8rem;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 840px) {
    margin-left: 8rem;
    margin-top: 1rem;
  }

  @media (max-width: 650px) {
    margin-left: 8rem;
    margin-top: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: lightgray;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    
    :hover {
      color: #a593ef;
    }
  }
`;

const SocialMediaSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  marign-right:10rem;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 50px;
    margin-top: 15rem;
    @media (max-width: 840px) {
      margin-left: 3rem;
      margin-top: 1rem;
    }
  
    @media (max-width: 650px) {
      margin-left: 3rem;
      margin-top: 1rem;
    }

    :hover {
      background-color: #a593ef;
    }

    a {
      margin-top: 0.2rem;
      color: #fff;
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #a593ef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 20rem;

  @media (max-width: 650px) {
    position: absolute;
    right: 20rem;
    top: 16rem;
    margin-top:40rem;
    
  }
`;
