import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Triumph from "../../Assets/Projects/Triumph.png";
import netflix from "../../Assets/Projects/netflix.jpeg";
import Ecommerce from "../../Assets/Projects/Ecommerce.jpeg";
import Todo from "../../Assets/Projects/Todo.jpeg";
import Socialmedia from "../../Assets/Projects/Socialmedia.jpeg";

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
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce-Application"
              description="An e-commerce platform for selling Gameing gadgets . whichcan handle both the customer and admin sides , Customer can access cart and wishlist for the productmanagement , Review and rate purchased product● Customer registration , Change password ,Orders status,mobile authentication, edit profile● Admin login, block/unblock customer, assign stocks/edit-stockproduct, track payments,Update Orders status GraphicalInterfaceto observe company Ongoing status● user can buy product using paypal , razorpay or cash ondelivery."
              ghLink="https://github.com/rohanraj7/Gameload-Ecom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Socialmedia}
              isBlog={false}
              title="social Media Platform"
              description="● user can register and login, authentication type: JWT
              Authentication,Session Authentication
              ● user can edit their pictures/videos ,also can edit their proﬁle
              and Changepassword , user can block or unblock other
              users 
              ● user can follow / unfollow others, chat with friends ,user can like and comment to others pictures , can create groups and can assign members to it,group owner can make others as group
              admin"
              ghLink="https://github.com/rohanraj7/drf_react.git"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NetFlix"
              description="Netflix uses React for its component-based architecture, which helps build reusable and maintainable UI elements. They leverage Server-Side Rendering (SSR) to improve initial page load speeds by delivering pre-rendered content."
              ghLink= "https://github.com/rohanraj7/NetFlix_Clone__"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="TODO"
              description="A Todo application built using React allows users to manage their tasks efficiently. It uses local state or Context API for managing the task list and CRUD operations (Create, Read, Update, Delete) for handling tasks.
              For state management, you can use React's useState or libraries like Redux for more complex apps. The app enables adding, editing, deleting, and marking tasks as completed. LocalStorage is often used to persist tasks between sessions."
              ghLink="https://github.com/rohanraj7/ToDo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Triumph}
              isBlog={false}
              title="Triumph"
              description="This is the project of the fully responisive functions."
              ghLink="https://github.com/rohanraj7/triumph" 
              demoLink = "https://rohanraj7.github.io/triumph/"             
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingcart}
              isBlog={false}
              title="shoppingcart_API_Integration"
              description="This project is a shopping cart application
              developed using Flutter, integrating REST API for
              data retrieval and utilizing the GetX state
              management ."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
