import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ROHAN RAJ </span>
            from <span className="purple">Kollam, Kerala, India</span>.
            <br /> As a fresher with a passion for full-stack web development, I am excited to share my journey as a Python Django and React developer. Currently, I am expanding my skills in building dynamic web applications using modern frameworks like Django, React, and JavaScript. This self-learning experience has allowed me to develop my skills independently, and I take pride in my commitment to continuous growth and improvement.
            <br />
            <br />
            As a self-learner, I am excited to bring my skills and knowledge to a dynamic organization. I thrive in innovative environments that encourage professional growth. Please check out my portfolio to see my dedication and passion for web development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on Adventures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't quit. Work hard, and even if it takes time, don't worry!"
          </p>
          <footer className="blockquote-footer">Rohan Raj</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
