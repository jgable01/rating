import React from "react";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";
import { useState } from "react";
import Dialog from "./Dialog";

function Star(props) {
  const [colored, setColored] = useState(false);
  return (
    <div className="star">
      <FaStar
        onClick={props.click}
        color={props.selected || colored ? "yellow" : "rgb(236, 235, 235)"}
      />
    </div>
  );
}

export default Star;
