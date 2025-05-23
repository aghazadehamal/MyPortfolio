import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Card.Img
        style={{ height: "200px", objectFit: "cover" }}
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ flexGrow: 1 }}>
          <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
          <Card.Text className="purple">
            Technology: {props.technologyUsed}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        </div>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          className="download-button"
          style={{ marginTop: "20px" }}
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
