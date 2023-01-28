import React from "react";
import "./About.css";
import SVG from "../../assets/about.png";
const About = () => {
  return (
    <section id="About">
      <h5>About us</h5>
      <div className="container about__container">
        <div className="about__content">
          <p>
            Sardar Vallabhbhai Patel Institute of Technology, Vasad, has emerged
            as the chieftain among the premiere institutes of Gujarat for the
            last 25 years. Prakarsh is one of the most recognized symposiums all
            over Gujarat.
          </p>
          <p>
            It is a perfect launch pad for tech geeks to showcase their
            intelligence and innovativeness, and a massive platform for various
            activities and events combined with loads of entertainment. Prakarsh
            2023 will be held on 23-25 Feb and will feature an impressive lineup
            of 40 events, which will incorporate fun activities with ardour.
          </p>
        </div>
        <div className="about__img">
          <div className="img">
            <img src={SVG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
