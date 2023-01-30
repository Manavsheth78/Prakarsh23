import React from "react";
import TeamCard from "./TeamCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "./Team.css";

function Team() {
  const core_team = [
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
    },
  ];

  const developers = [
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <h2 className="headingteam">The Team that made it possible</h2>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Core Team</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Developers</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="align-items-center">
                          {core_team.map((project, index) => {
                            return <TeamCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {developers.map((project, index) => {
                            return <TeamCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
