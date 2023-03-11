import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Prince Dhamecha </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />I am currently pursuing Bachelor of technology in computer
            engineering from Dharmsinh Desai University.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
