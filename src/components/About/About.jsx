import React from "react";
import "./About.css";
import SVG from "../../assets/about.png";
const About = () => {
  return (
    <section id="About">
      <div className="heading">
        <h2
          className="abouthead"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          About us
        </h2>
      </div>
      <div className="container about__container">
        <div
          className="about__content"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-easing="ease-in-sine"
        >
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
        <div
          className="about__img"
          data-aos="fade-left"
          // data-aos-anchor="#example-anchor"
          data-aos-offset="300"
          data-aos-delay="500"
          data-aos-duration="300"
        >
          <div className="img">
            <img src={SVG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
