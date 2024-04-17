import React from "react";
import Card from "react-bootstrap/Card";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHEHROZ WASEEM </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br /><br />
            <span style={{ display:"flex",flexDirection:"column" }}>
            <p>
            I am a software developer with expertise in the MERN stack and over a year of experience.<br/> Proficient in cloud-native technologies such as Docker and Kubernetes, I specialize in crafting scalable and resilient applications.
            </p>
            <p>
            I hold a <span className="purple"> Bachelor’s Degree in Computer Information and System Engineering </span> and I'm currently pursuing a <span className="purple">Post Graduate Diploma</span> in <span className="purple">Blockchain Specialization </span>from <span className="purple">George Brown College in Toronto, Canada. </span>
            </p>
            </span>
            <br />
            Let's &nbsp;   
            <a
                href="https://www.linkedin.com/in/shehroz-waseem/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                  connect 
              </a>
              &nbsp; and explore transformative solutions together! 🚀        </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
