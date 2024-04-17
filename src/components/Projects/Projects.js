import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from "../../Assets/Projects/expense.png";
import project from "../../Assets/Projects/project.png";
import vote from "../../Assets/Projects/vote.png";
import food from "../../Assets/Projects/food.png";
import senti from "../../Assets/Projects/senti.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Voting Dapp"
              description="Developed a decentralized voting application utilizing Ethereum blockchain technology. Used NextJS for Front-end and smart contract interaction. Implemented CI/CD pipeline and Kubernetes infrastructure on GCP using Terraform.
              "
              ghLink="https://github.com/ShehrozWaseem/Cloud-Native-Applications-4034"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={senti}
              isBlog={false}
              title="Vocal Sentiment Analysis"
              description="Designed and implemented Vocal Sentiment Analysis system as part of my academic journey. Used ReactJs for the UI, and integrated backend functionality with Python libraries such as NumPy, Pandas, Matplotlib, Scikit-Learn, and Keras through a Flask API. Utilized Firebase for seamless data management."
              ghLink="https://github.com/ShehrozWaseem/FYP--Vocal-Sentiment-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Management"
              description="React.js and Firebase power this project, providing robust authentication and image uploads for user profiles. Users create projects via /create route, communicate progress through comments, and view active users. Single-page functionality with React Router and state management via custom hooks and Context API streamline the experience."
              ghLink="https://github.com/ShehrozWaseem/Project-Management"
              demoLink="https://projectmanagement-e812f.web.app/login"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food App"
              description="React based food app in which I have used firebase as a backend service to fetch the meals and then a user can order that particular item and the order details will also be saved in firebase db. Context API is used to implement the cart functionality of the app."
              ghLink="https://github.com/ShehrozWaseem/React-FoodApp"
              demoLink="https://joyful-griffin-2e4e57.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="An expense tracker app powered by Firebase authentication and Context API for state management. Utilizes React Router for single-page functionality with Route Guarding. Users sign up/login, input expenses for 3 years, and view their previous expenses upon login."
              ghLink="https://github.com/ShehrozWaseem/Expense-Tracker-with-Authentication"
              demoLink="https://myexpenses-5f9ad.web.app/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
