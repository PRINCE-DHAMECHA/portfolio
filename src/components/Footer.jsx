import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Coding Platforms</h1>
          <p>
            Check out my competitve <span className="purple">coding </span>
            platforms
          </p>
          <ul className="mb-5 home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/PRINCE-DHAMECHA"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/p_m_dhamecha"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/PRINCE_DHAMECHA"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/pmdhamecha673/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
