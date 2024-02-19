// App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Banner/Header';
import ProfComponent from './components/Banner/ProfComponent';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import TextWithImage from './components/ImageText/Img';
import HeritageComponent from './components/Heritage/HeritageComponent';
import Yarn from './components/Pages/Products/Yarn/Yarn';
import RawMaterial from './components/Pages/Products/RawMaterial/RawMaterial';
import HomeTextile from './components/Pages/Products/HomeTextile/HomeTextile';
import Service from './components/Services/Service';
import AboutUs from './components/AboutUs/AboutUs';
import Certifications from './components/Certifications/Certification';
import Certification from './components/Pages/Services/Certifications/Certification'
import Compliance from './components/Pages/Services/Compliance Services/Compliance';
import Consultancy from './components/Pages/Services/Consultancy/Consultancy';
import Customized from './components/Pages/Services/Customized Products/Customized';
import FabricSourcing from './components/Pages/Services/Fabric Sourcing/FabricSourcing';
import GarmentServices from './components/Pages/Services/Garment Services/GarmentServices';
import YarnSourcing from './components/Pages/Services/Yarn Sourcing/YarnSourcing';
import Fabrics from './components/Pages/Products/Fabrics/Fabrics';
import Finishing from './components/Pages/Products/Finishing/Finishing';
import Natural from './components/Pages/Products/Natural/Natural';
import Garments from './components/Pages/Products/Garments/Garments';
import Synthetic from './components/Pages/Products/Synthatic/Synthatic'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          {/* Route for Yarn page */}
          <Route
            path="/yarn"
            element={
              <>
                <Header />
                <Yarn />
                <Clients />
                <LightColor>
                <Footer />
                </LightColor>
                
              </>
            }
          />

          {/* Route for Textile page */}
          <Route
            path="/raw-material"
            element={
              <>
                <Header />
                <RawMaterial />
                <Clients />
                <LightColor>
                <Footer />
                </LightColor>
              </>
            }
          />
          <Route 
            path="/aboutus"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* Route for HomeTextile page */}
          <Route
            path="/home-textile"
            element={
              <>
                <Header />
                <HomeTextile />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
           <Route
            path="/Fabrics"
            element={
              <>
                <Header />
                <Fabrics />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/Finishing"
            element={
              <>
                <Header />
                <Finishing />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />

          <Route
            path="/Natural"
            element={
              <>
                <Header />
                <Natural />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />

          <Route
            path="/Garments"
            element={
              <>
                <Header />
                <Garments />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/Synthetic"
            element={
              <>
                <Header />
                <Synthetic />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
         
        {/*Services Routes*/}
        <Route
            path="/Certifications"
            element={
              <>
                <Header />
                <Certification />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/YarnSourcing"
            element={
              <>
                <Header />
                <YarnSourcing />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/FabricSourcing"
            element={
              <>
                <Header />
                <FabricSourcing />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/GarmentServices"
            element={
              <>
                <Header />
                <GarmentServices />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/ComplianceServices"
            element={
              <>
                <Header />
                <Compliance />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/CustomizedProducts"
            element={
              <>
                <Header />
                <Customized />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
          <Route
            path="/Consultancy"
            element={
              <>
                <Header />
                <Consultancy />
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />

          {/* Default route (home page) */}
          <Route
            path="/"
            element={
              <>
                <Banner>
                  <Header />
                  <ProfComponent />
                </Banner>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <LightColor>
                <Service />
                <br />
                <br />
                <br />
                <br />
                <TextWithImage />
                <HeritageComponent />
                </LightColor>
                <Certifications />
                <LightColor>
                  <Category />
                </LightColor>
                <Clients />
                <LightColor>
                  <Footer />
                </LightColor>
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
