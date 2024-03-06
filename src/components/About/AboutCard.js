import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Amal </span>
    from <span className="purple">Baku, Azerbaijan.</span>
    <br />
    A Frontend Developer passionate about transforming ideas into reality using code.
    <br />
    Skilled in creating custom websites with ReactJs, JavaScript, HTML5, CSS3, and have worked on projects like a news website and an online driving lessons platform.
    <br />
    Apart from coding, there are other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
    <li className="about-activity">
      <ImPointRight /> Playing Chess
    </li>
  </ul>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
