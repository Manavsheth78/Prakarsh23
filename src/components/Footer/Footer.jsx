import React from "react";
import "./Footer.css";
import footer from "../../assets/footer.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import belowfooterlogo from "../../assets/belowfooterlogo.png";

import svit from "../../assets/svitlogo.png";

function Footer() {
  return (
    <section id="footer">
      <div className="f">
        <div className="footer">
          <div className=" left">
            <img src={footer} />
          </div>
          <div className="right">
            <h1>
              <b> contact us </b>{" "}
            </h1>
            <div className="finfo">
              <a href="#" className="flinks">
                {" "}
                <IoLocationSharp className="ficons" />
                Sardar Vallabhai Patel institute of Technology{" "}
              </a>
              <a href="#" className="flinks">
                {" "}
                <IoMdMail className="ficons" />
                PRAKARSH.ORG
              </a>
              <a href="#" className="flinks">
                {" "}
                <AiFillPhone className="ficons" /> 0123456789{" "}
              </a>

              <div className="icon">
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  <AiOutlineYoutube />
                </a>
                <a href="">
                  <AiFillLinkedin />
                </a>
                <a href="">
                  <AiFillFacebook />
                </a>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className="belowhr">
          <div>
            <img src={belowfooterlogo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
