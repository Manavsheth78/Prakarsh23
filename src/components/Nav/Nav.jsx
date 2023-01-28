import React from "react";
import "./Nav.css";
import IMG from "../../assets/logo.png";
import { VscListSelection } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Nav = () => {
  function openmenu() {
    var sidemeu = document.getElementsByClassName("menu");
    function openmenu() {
      sidemeu.style.right = "0";
    }
    function closemenu() {
      sidemeu.style.right = "-200px";
    }
  }

  function closemenu() {
    var sidemeu = document.getElementsByClassName("menu");
    function openmenu() {
      sidemeu.style.right = "0";
    }
    function closemenu() {
      sidemeu.style.right = "-200px";
    }
  }
  return (
    <nav>
      <div class="max-width">
        <div class="logo">
          <img src={IMG} />
        </div>
        <ul class="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Events">Events</a>
          </li>
          <li>
            <a href="#Glimps">Glimps</a>
          </li>
          <li>
            <a href="#Sponser">Sponser</a>
          </li>
          <li>
            <a href="#Signin">Sign in</a>
          </li>

          <li>
            <a href="#">
              <AiOutlineShoppingCart className="icon" />
            </a>
          </li>
          <li>
            {" "}
            <RxCross2 className="nav-icons" onClick={closemenu()} />{" "}
          </li>
        </ul>{" "}
        <VscListSelection className="nav-icons" onClick={openmenu()} />{" "}
      </div>
    </nav>
  );
};

export default Nav;
