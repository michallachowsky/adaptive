import React from "react";
import "./Modal2.css";

function Modal2({ setOpenModal2 }) {
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Web scrapping course</h1>
        </div>
        <div className="body">
          <p>Here You will learn the basics of Web scrapping! Course is all in English. For the evalution 
              You will have to pass knowledge test, all the details will be given during lectures.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal2(false);
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

export default Modal2;