import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PROFESSIONAL<span className="purple"> GOAL </span>
            </h1>
            <p className="home-about-body">
              Creative and technical web development professional looking for a
              position with a tech company where I can enhance my knowledge of
              full stack development and grow with the organization.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
