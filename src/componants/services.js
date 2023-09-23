import React, { useEffect, useState } from "react";
import "./services.css";
const Experience = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() => {
    function o() {
      const ser = document.getElementById("SERVICES");
      if (window.scrollY > ser.offsetTop - 500) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll", o);
  }, []);
  return (
    <div id="SERVICES">
      {displayM && (
        <>
          <div id="s-1">
            <div className="s-1-1">
              <img src="/IMG/m1.jpg" alt="" />
              <div>
                <h2>Website Design</h2>
                <h3>76 Projects</h3>
              </div>
            </div>
            <div className="s-1-2">
              <img src="/IMG/m2.jpg" alt="" />
              <div>
                <h2>Mobile App Design</h2>
                <h3>63 Projects</h3>
              </div>
            </div>
            <div className="s-1-3">
              <img src="/IMG/m3.jpg" alt="" />
              <div>
                <h2>Brand Identity</h2>
                <h3>45 Projects</h3>
              </div>
            </div>
          </div>
          <div id="s-2">
            <h1>What do I help?</h1>
            <h2>
              I will help you with finging a solution and solve your problem, We
              use process design to create digital products. Besides that also
              help their business.
            </h2>
            <h2>
              We use process design to create digital products. Besides that
              also help their business
            </h2>
            <div id="s-2-1">
              <h2>
                <span>284+</span>Projects Completed
              </h2>
              <h2>
                <span>284+</span>Happy Clients
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
