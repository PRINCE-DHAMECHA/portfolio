import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import quora from "../../Assets/Projects/quora.png";
import type from "../../Assets/Projects/type.png";
import gamestation from "../../Assets/Projects/gamestation.png";
import stock from "../../Assets/Projects/stock.png";
import social from "../../Assets/Projects/social.png";
import musicify from "../../Assets/Projects/musicify.png";
import moodmate from "../../Assets/Projects/moodmate.png";
import scheduling from "../../Assets/Projects/scheduling.jpg";
import gitty from "../../Assets/Projects/gitty.png";

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
              description="One-stop solution for financial education where the goal is to spread financial awareness in youth. The platform provides a simulated stock market and it offers real-time stock data of NSE and NYSE,Also the platform introduces prototype of an innovative lending system"
              ghLink="https://github.com/PRINCE-DHAMECHA/stock-prince"
              demoLink="https://stock-prince.netlify.app"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={moodmate}
              isBlog={false}
              title="MoodMate"
              description="A real-time chatting platform where users can chat anonymously with random strangers who align with their moods and preferences"
              ghLink="https://github.com/PRINCE-DHAMECHA/MoodMate"
              demoLink="https://mood-mate.netlify.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={quora}
              isBlog={false}
              title="quoraPrince"
              description="A query-solving platform where users can post their queries and get answers from all over the world."
              ghLink="https://github.com/PRINCE-DHAMECHA/qouraprince"
              demoLink="http://prince673.pythonanywhere.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={gitty}
              isBlog={false}
              title="Gitty Bot"
              description="Gitty-Bot automatically response to events on your repositories like issues and pull requests, enhancing repository organization and saving you time."
              ghLink="https://github.com/PRINCE-DHAMECHA/Gitty-Bot"
              demoLink="https://devpost.com/software/gitty-bot"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={scheduling}
              isBlog={false}
              title="Scheduling Algorithms"
              description="Implemented different CPU scheduling algorithms including FCFS, SJF, SRTF, and Round Robin for operating system in java and generatedGantt chart along with performance matrix in Java."
              ghLink="https://github.com/PRINCE-DHAMECHA/OS_CPU_Scheduling_Java"
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
