import React from "react";
import "./Modal4.css";

function Modal4({ setOpenModal4 }) {
  return (
    <div className="modalBackground4">
      <div className="modalContainer4">
        <div className="titleCloseBtn4">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Travelling</h1>
        </div>
        <div className="body">
          <p>I have travelled around 28 countries already, I try to visit as many as possible. Without traveling life would be sad.
              By travel I learn a lot about other cultures, food, history. So my most important knowledge I want You to have from interaction with
              me is to travel more!!
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal4;