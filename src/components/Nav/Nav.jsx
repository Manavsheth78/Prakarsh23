import React from "react";
import "./Nav.css";
import IMG from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Nav = () => {
  return (
    <nav >
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
        </ul>
      </div>
    </nav>
  )
}

export default Nav

