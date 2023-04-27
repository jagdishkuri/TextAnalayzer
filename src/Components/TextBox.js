import React, { useState } from "react";
import "./TextBox.css";
export default function Textbox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy=()=>{
    let text=document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleExtraSpaces=()=>{
       let newText= text.split(/[ ]+/);
       setText(newText.join(" "));
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <h2>{props.heading1}</h2>
          <label
            htmlFor="textBox"
            className="form-label"
          ></label>
          <textarea
            style={{ backgroundColor: "white" }}
            className="form-control " 
            value={text}
            onChange={handleOnChange}
            id="textBox"
            rows="8"
          ></textarea>
          <button className="btn btn-danger my-2 mx-1" onClick={handleUpClick}>
            Change to UpperCase
          </button>
          <button className="btn btn-danger my-2 mx-1" onClick={handleLoClick}>
            Change to LowerCase
          </button>
          <button
            className="btn btn-danger my-2 mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleCopy}>Copt Text</button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="container">
        <h3>Text summary</h3>
        <p>
          There is <b>{text.split(" ").length}</b> words and{" "}
          <b>{text.length}</b> Characters
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
