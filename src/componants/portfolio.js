import React, { useEffect, useState } from "react";
import "./portfolio.css";
const Portfolio = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() => {
    function o() {
      const por = document.getElementById("PORTFOLIO");
      if (window.scrollY > por.offsetTop - 500) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll", o);
  }, []);
  return (
    <div id="PORTFOLIO">
      {displayM && (
        <>
          <div id="p-1">
            <div id="p-1-1">
              <h1>My Latest Works</h1>
              <h4>Perfect solution for digital experience</h4>
            </div>
            <a href="/" id="p-1-2">
              Explore More Works
            </a>
          </div>
          <div id="p-2">
            <img src="./IMG/showCase1.jpg" alt="" id="p-2-1" />
            <img src="./IMG/showCase2.jpg" alt="" id="p-2-2" />
            <img src="./IMG/showCase2.jpg" alt="" id="p-2-3" />
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
