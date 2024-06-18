import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import vsgoi from "../../Assets/Projects/chatify.png";
import PortFolio from "../../Assets/Projects/blog.png";

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
              imgPath={vsgoi}
              isBlog={false}
              title="College Website"
              description="Experience a seamless digital journey with Dr. Virendra Swarup Group of Institutions, where innovation meets education. Our website, built using the robust MERN stack (MongoDB, Express.js, React, Node.js). Easily register or log in to access personalized content, manage your courses, and stay updated with campus events"
              ghLink="https://github.com/jacksonmadan/College_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortFolio}
              isBlog={false}
              title="PortFolio"
              description=" Welcome to my portfolio.It is designed using REACT and This collection showcases my work, skills, and achievements in Development. It is designed to highlight my professional growth, creative process, and the diverse range of projects I have successfully completed."
              ghLink="https://github.com/jacksonmadan/PortFolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce website(ShopKaro)"
              description="Developed a comprehensive e-commerce platform designed to provide a seamless, user-friendly, and secure online shopping experience. The project involved the integration of various technologies and best practices to ensure a robust, scalable, and customer-centric website."
              ghLink="https://github.com/jacksonmadan/E-commerce"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
