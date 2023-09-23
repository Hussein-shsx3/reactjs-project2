import React, { useEffect, useState } from "react";
import "./main.css";
const Main = () => {
  const [displayM, setDisplayM] = useState(true);
  useEffect(() =>{
    function o(){
      const main = document.getElementById("MAIN");
      if (window.scrollY < main.offsetTop + 600) {
        setDisplayM(true);
      } else {
        setDisplayM(false);
      }
    }
    window.addEventListener("scroll",o)
  },[]);
  return (
    <div id="MAIN">
      {displayM && (
        <div id="M">
          <div id="m-1-1">
            <h1>Hey There, I'm Binjan.</h1>
            <h2>I design beautiful simple things, And I love what i do</h2>
          </div>
          <a href="/" id="email">
            husseinbux133@gmail.com
          </a>
          <div id="m-1-2">
            <h3 id="m-1-2-1">
              <span>10</span>Years Experience
            </h3>
            <div id="m-2-2">
              <img src="/IMG/certificate.jpg" alt="" />
              <h3>CERTIFIED PROFATIONAL UI/UX DESIGNER</h3>
            </div>
          </div>
          <img src="/IMG/splash.jpg" alt="" id="img-1" />
          <img src="/IMG/person.jpg" alt="" id="img-2" />
        </div>
      )}
    </div>
  );
};

export default Main;
