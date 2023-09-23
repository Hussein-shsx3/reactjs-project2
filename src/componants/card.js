import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div id="card">
      <img src={props.img} alt="" />
      <h5 id="text-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        exercitationem. Eos nostrum obcaecati quas dolores laudantium harum
        totam.
      </h5>
      <hr />
      <h5 id="text-2">Anamika Sandula</h5>
      <h6>Creativ Manager</h6>
    </div>
  );
};

export default Card;
