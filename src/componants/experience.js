import React, { useEffect, useState } from "react";
import "./experience.css";
const Experience = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() => {
    function o() {
      const exp = document.getElementById("EXPERIENCE");
      if (window.scrollY > exp.offsetTop - 500) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll", o);
  }, []);
  return (
    <div id="EXPERIENCE">
      {displayM && (
        <>
          <h1 id="e-1">My Work Experience</h1>
          <div id="e-2">
            <div id="e-2-1">
              <div id="e-2-1-1">
                <h2>Self-Employed, Brisbane</h2>
                <h4>Aug 2014 - Sep 2016</h4>
              </div>
              <div id="e-2-1-2">
                <h2>New Man Services</h2>
                <h4>Aug 2014 - Sep 2016</h4>
              </div>
              <div id="e-2-1-3">
                <h2>Global Solution</h2>
                <h4>Aug 2014 - Sep 2016</h4>
              </div>
            </div>
            <div id="e-2-2">
              <div id="e-2-1-1">
                <h2>
                  <span id="span-1"></span>Visual Designer
                </h2>
                <h4>
                  A visual desginer dsesign for a variety of platoforms, may
                  include internet and internet sites, games, movies, kioasks
                  and wearbies. In short, they create the concepts
                </h4>
              </div>
              <div id="e-2-1-2">
                <h2>
                  <span id="span-2"></span>Self-Employed, Brisbane
                </h2>
                <h4>
                  A visual desginer dsesign for a variety of platoforms, may
                  include internet and internet sites, games, movies, kioasks
                  and wearbies. In short, they create the concepts
                </h4>
              </div>
              <div id="e-2-1-3">
                <h2>
                  <span id="span-3"></span>Self-Employed, Brisbane
                </h2>
                <h4>
                  A visual desginer dsesign for a variety of platoforms, may
                  include internet and internet sites, games, movies, kioasks
                  and wearbies. In short, they create the concepts
                </h4>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
