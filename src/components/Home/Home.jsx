import React from "react";
import "./Home.css";
import IMG from "../../assets/logo.png";
import Title from "../../assets/title.png";
const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="home__content">
          <div className="home__title">
            <img src={Title} />
          </div>
          <p>
            Prakarsh ‘23’s vision is to assist the rural areas, and villages and
            to encourage them in the advancement of their lives through
            technologies developed in Prakarsh by students.{" "}
          </p>
          <div className="home__btn"></div>
        </div>

        <div className="home__logo">
          <div className="home__logo-img">
            <img src={IMG} alt="" />
            {/* <p>1-2 April</p> */}
          </div>
        </div>
        <div className="glow">
          <span class="fast-flicker">co</span>mi
          <span class="flicker">n</span>gs<span class="flicker">oo</span>n
        </div>
      </div>
    </section>
  );
};

export default Home;
