import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sunil.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container style={{textAlign:"center"}} className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Amal Aghazada</strong>
              </h1>

              <p className="heading-description blockquote">
              I'm a Frontend Developer with over a year of experience, specializing in creating interactive websites and online platforms, including a news page and driving lessons portal. My work focuses on using the latest technologies to enhance user experience. Through my projects, I've developed a deep understanding of the importance of user-centric design and am committed to delivering innovative solutions that meet users' needs. I'm passionate about keeping up with industry trends and continuously improving my skills to contribute positively to the digital world.


              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            {/* <Col md={5}>
            <img className="profile-pic" src={`${process.env.PUBLIC_URL}/images/eyml.jpeg`} alt="Açıklama" />

            </Col> */}
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
