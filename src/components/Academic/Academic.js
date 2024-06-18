import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Academiccard from "./Academiccard"; 
import img from "../../Assets/cert.png"
import { IoBookSharp } from "react-icons/io5";


function Academic() {
    return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                 <strong className="purple">Education</strong>
              </h1>
            </Col>

      
          <ul>
            <li className="about-activity"style={{ fontSize: "1.9em" }}>
            <IoBookSharp /> MCA(Cloud Computing And Devops)
            <div style={{ fontSize: "0.65em", color: "rgba(255, 255, 255, 0.5)"  }}>
           <span>College Name:Chandigarh University</span> <br />
           <span>CGPA: 7.5</span> <br />
           <span>2023-2025</span> <br />  
           </div>
            </li>
            <li className="about-activity" style={{ fontSize: "1.9em" }}> 
            <IoBookSharp /> BSC(IT/CS)
            <div style={{ fontSize: "0.65em", color: "rgba(255, 255, 255, 0.5)"  }}>
           <span>College Name:Sri Guru Gobind Singh College Of Commerce,Delhi University</span> <br />
           <span>CGPA: 8.23</span> <br />
           <span>2020-2023</span> <br />  
           </div>
            </li>
            <li className="about-activity" style={{ fontSize: "2.0em" }}>
           <IoBookSharp /> Class 12<sup style={{ verticalAlign: "super", fontSize: "0.5em", marginLeft: "1px" }}>th</sup>
           <div style={{ fontSize: "0.65em", color: "rgba(255, 255, 255, 0.5)"  }}>
           <span>School Name:Happy Home Public School</span> <br />
           <span>Percentage: 91.8</span> <br />
           <span>2019-2020</span> <br />  
           </div>
          </li>
          <li className="about-activity" style={{ fontSize: "2.0em" }}>
           <IoBookSharp /> Class 10<sup style={{ verticalAlign: "super", fontSize: "0.5em", marginLeft: "1px" }}>th</sup>
           <div style={{ fontSize: "0.65em", color: "rgba(255, 255, 255, 0.5)"  }}>
           <span>School Name:Happy Home Public School</span> <br />
           <span>Percentage: 85</span> <br />
           <span>2017-2018</span> <br />  
           </div>
          </li>
          </ul>

          
          

            {/* <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col> */}

          </Row>
          <h1 className="project-heading">
            <strong className="purple">Certifications</strong>
          </h1>
        
          <Container>
          <Row className="justify-content-center">

          <Col md={4} className="project-card">
            <Academiccard
              imgPath={img}
              isBlog={false}
              title="AWS CLoud Practitioner"
              description=" The AWS Certified Cloud Practitioner exam is designed for individuals who have foundational knowledge of the AWS Cloud, its global infrastructure, and core AWS services. This certification validates an individual’s ability to understand basic AWS Cloud concepts and demonstrate how AWS services can meet common business needs."
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:7179551098469306371/"
              buttonText="LINK"
            />
          </Col>
  </Row>
         </Container>  

          {/* <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1> */}
  
        </Container>
      </Container>
    );
  }

  export default Academic;