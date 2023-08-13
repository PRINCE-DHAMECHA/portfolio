import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gdsc from "../../Assets/gdsc.png";
import duhacks from "../../Assets/duhacks.png";
import ansr from "../../Assets/ansrcoachImg.jpg";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong>Experiece</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <Card className="project-card-view py-4 px-2">
              <Card.Img variant="top" src={ansr} alt="card-img" />
              <Card.Title>ANSRCOACH</Card.Title>
              <Card.Body>
                <Card.Text className="" style={{ textAlign: "center" }}>
                  Web Development Intern <br></br>(FEB'2023-APR'2023)
                </Card.Text>
                <Button
                  className="m-3"
                  variant="primary"
                  href={
                    "https://drive.google.com/file/d/1zqqRaZPNTZX9N-C1AanBj4Llpk0-N9xj/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <BsGithub /> &nbsp;
                  {"Certificate"}
                </Button>
                <Button
                  variant="primary"
                  href={
                    "https://drive.google.com/file/d/17m0QZjK4i_skSXlvr7ycs3NIz3cqltwo/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <BsGithub /> &nbsp;
                  {"LOR"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="project-card">
            <Card className="project-card-view py-4 px-2">
              <Card.Img variant="top" src={gdsc} alt="card-img" />
              <Card.Title>GDSC - DDU</Card.Title>
              <Card.Body>
                <Card.Text className="" style={{ textAlign: "center" }}>
                  Web Team Member (SEP'22-current)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="project-card">
            <Card className="project-card-view py-4 px-2">
              <Card.Img variant="top" src={duhacks} alt="card-img" />
              <Card.Title>DUHACKS</Card.Title>
              <Card.Body>
                <Card.Text className="" style={{ textAlign: "center" }}>
                  Web Team Lead (NOV'22-FEB'23)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
