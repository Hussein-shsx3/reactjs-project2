import React from "react";
import "./header.css";

const Header = () => {
  function m() {
    const nav = document.getElementById("nav");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("nav");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  function o() {
    const hea = document.getElementById("header");
    if (window.scrollY > hea.offsetTop) {
      hea.classList.add("active-s");
    } else {
      hea.classList.remove("active-s");
    }
  }
  window.addEventListener("scroll", o);

  return (
    <header id="header">
      <h2 className="logo">Binjan</h2>
      <ul id="nav">
        <li>
          <a href="#SERVICES">SERVICES</a>
        </li>
        <li>
          <a href="#EXPERIENCE">EXPERIENCE</a>
        </li>
        <li>
          <a href="#PORTFOLIO">PORTFOLIO</a>
        </li>
        <li>
          <a href="#TESTIMONIALS">TESTIMONIALS</a>
        </li>
        <li>
          <a href="/">+001 (313) 345 678</a>
        </li>
        <li className="phone">
          <a href="/">
            <i className="fa-solid fa-phone-volume"></i>
          </a>
        </li>
        <i className="fa-solid fa-xmark" onClick={c}></i>
      </ul>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;
