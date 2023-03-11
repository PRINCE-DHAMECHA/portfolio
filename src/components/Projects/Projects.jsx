import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import quora from "../../Assets/Projects/quora.png";
import type from "../../Assets/Projects/type.png";
import gamestation from "../../Assets/Projects/gamestation.png";
import stock from "../../Assets/Projects/stock.png";
import social from "../../Assets/Projects/social.png";
import musicify from "../../Assets/Projects/musicify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Pro</strong>jects{" "}
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've created.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Prince"
              description="I've created dummy stock market where user can buy stocks, sell stocks, analyze stocks and view prices charts. User can also search for actual Indian stock and get real time price chart and also get recommendations about buying or selling stocks"
              ghLink="https://github.com/PRINCE-DHAMECHA/stockPrince"
              demoLink="http://stock-prince.tk"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Prince"
              description="A platform where people can post their photos and see other's photos and also comment on their posts."
              ghLink="https://github.com/PRINCE-DHAMECHA/socialPrince"
              demoLink="https://social-prince.netlify.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={musicify}
              isBlog={false}
              title="Musicify"
              description="Spotify like platform where you can listen to your favourite songs and see what's trending in your country."
              ghLink="https://github.com/PRINCE-DHAMECHA/musicifyy"
              demoLink="https://musicifyy.netlify.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={quora}
              isBlog={false}
              title="quoraPrince"
              description="A query-solving platform where people can post their questions and other people can interact with them.
"
              ghLink="https://github.com/PRINCE-DHAMECHA/qouraprince"
              demoLink="http://prince673.pythonanywhere.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={gamestation}
              isBlog={false}
              title="Gamestation"
              description="Platform where you can play games like tic-tac-toe, snake game, mind game, etc."
              ghLink="https://github.com/PRINCE-DHAMECHA/GameStation"
              demoLink="https://prince-dhamecha.github.io/GameStation/"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={type}
              isBlog={false}
              title="Type Test"
              description="Platform where you can test your typing speed."
              ghLink="https://github.com/PRINCE-DHAMECHA/Typing-Test"
              demoLink="https://prince-dhamecha.github.io/Typing-Test/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
