import "./Style/index.css";
import React from "react";
import Star from "./Components/Star";
import StarRating from "./Components/StarRating";
import Dialog from "./Components/Dialog";
import { useState } from "react";



function App() {
  const [visible, setVisible] = useState(true);
  function handleClick() {
    setVisible(!visible);
  }

  return (
    <div className="container">
      <div className="ratings">
        <StarRating />
      </div>
      <div className="dialog">
        <Dialog toggle={handleClick} visible={visible}/>
      </div>
    </div>
  );
}

export default App;
