import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgPlayStop } from "react-icons/cg";
import { DiAndroid } from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiDocker,
  SiMongodb,
  SiPgadmin,
  SiGit,
  SiNginx,
  SiTrello,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Postman for API testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Vercel for frontend deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      {/* Visual Studio Code for code editor */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Docker for containerization */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      
      {/* MongoDB Compass for MongoDB database management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      {/* Git for version control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      {/* Slack for team communication */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      {/* Nginx for web server management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      {/* Trello for project management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      {/* Jira for project management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
  );
}

export default Toolstack;
