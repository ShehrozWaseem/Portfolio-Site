import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate and driven Full Stack Developer & DevOps Engineer with a deep love for programming, specializing in <b className="purple">JavaScript, TypeScript, and Python</b>.
              <br />
              <br />
              My journey has led me to excel in building cutting-edge web technologies and products, particularly in areas related to <b className="purple">Blockchain</b>.
              <br />
              <br />
              My field of interest includes developing new <i><b className="purple">Web Technologies and Cloud Native</b></i> tools such as <b className="purple">Docker</b> and <b className="purple">Kubernetes</b>, alongside expertise in IT infrastructure management involving <b className="purple">virtualization with Proxmox and VMware ESXi</b>. I also possess strong computer networking skills and implement robust security practices.
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks like <i><b className="purple">React.js and Next.js</b></i>.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shehrozwaseem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shehroz-waseem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
