import React from "react";
import "./Modal1.css";

function Modal1({ setOpenModal1 }) {
  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="titleCloseBtn1">
          <button
            onClick={() => {
              setOpenModal1(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Python course</h1>
        </div>
        <div className="body">
          <p>Here You will learn the basics of Python! Course is all in English. For the evalution 
              You will have to pass knowledge test, all the details will be given during lectures.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal1(false);
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

export default Modal1;