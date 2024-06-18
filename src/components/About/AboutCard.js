import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             I am <span className="purple">Ankush Madan </span>
             from <span className="purple"> Delhi, India.</span><br></br>
           
            Driven Computer Science Student | Tech Enthusiast | Coding For Change | Eager To Learn
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badmintom
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening RAP
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(156 126 172)" }}>
            "Life is Charming Gift!"{" "}
          </p>
          <footer className="blockquote-footer">Ankush Madan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
