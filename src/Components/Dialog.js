import React from "react";
import { useState } from "react";

function Dialog(props) {

  return (
    <div className={`popUp ${props.visible ? "hide" : ""}`}>
      <input
        type="button"
        className={`dialogBtn ${props.visible ? "" : "hide"}`}
        value="Open Dialog"
        onClick={props.toggle}
      />
      <div
        className={`modal ${props.visible ? "hide" : ""}`}
      >
        <p className="head">Dialog Box</p>
        <p className="description">Here's some generic text</p>
        <button
          type="button"
          className={`button ${props.visible ? "hide" : ""}`}
          onClick={props.toggle}
        >
          Close Dialog
        </button>
      </div>
    </div>
  );
}

export default Dialog;
