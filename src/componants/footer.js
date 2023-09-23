import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() => {
    function o() {
      const foo = document.getElementById("FOOTER");
      if (
        window.scrollY > foo.offsetTop - 550
      ) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll", o);
  }, []);
  return (
    <div id="FOOTER">
      {displayM && (
        <>
          <div id="f-1">
            <h1>Let's make something amazing together.</h1>
            <h1>
              Start by <a href="/">saying hi</a>
            </h1>
          </div>
          <div id="f-2">
            <h3>Information</h3>
            <h4>145 New York, FL 5467, USA</h4>
            <a href="/">Services </a>
            <a href="/">Works </a>
            <a href="/">Notes </a>
            <a href="/">Experience </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
