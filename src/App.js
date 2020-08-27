import React from 'react';
import './styles/App.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CV from './components/CV';
import Other from './components/Other';
import Navi from './components/Navigation';
import Footer from './components/Footer';
import profilePic from './images/Developer_Woman_-_Colour/woman-colour-400px-01.png';

function App() {
  return (
    <>
      <Navi />
      <Container>
        <div className="content">
          <Contact />
          <div className="blank-div-hello" />
          <Row xs={12} className="hello">
            <Col className="hello-div">
              <Row>
                <Col className="profile-pic d-flex justify-content-start">
                  <Image alt="illustration by drawkit" title="student" src={profilePic} className="woman"></Image>
                </Col>
                <Col lg={12}  >
                  <p className="about-me">Hi, ich bin <span className="bold">Dan</span></p>
                  <p className="about-me-text mb-0">eine designorientierte Front-End-Entwicklerin. </p>

                  <p className="about-me-text mb-0">Mein Ziel ist es, durch sorgfältig ausgearbeiteten Code und benutzerzentriertes Design immersive und schöne Webanwendungen zu erstellen.</p>
                  <br />
                  <div className="arrow text-center " >
                    <a href="#skills">
                      <img alt="arrow" title="arrow" className="arrow-icon" src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow.png" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          {/**SKILLS */}
          <div className="blank-div" id="skills" />
          <div >
            <Skills />
          </div>
          <br /> <br /> <br />
          {/**LEBENSLAUF */}
          <div id="cv">
            <CV />
          </div>
          <br /> <br /> <br />
          {/**sonstiges */}
          <div id="other">
            <Other />
          </div>
          <br /> <br /> <br />
        </div>
      </Container >
      <br /> <br /> <br />
      <Footer />
    </>
  );
}

export default App;
