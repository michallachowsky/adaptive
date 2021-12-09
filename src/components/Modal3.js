import React from "react";
import "./Modal3.css";

function Modal3({ setOpenModal3 }) {
  return (
    <div className="modalBackground3">
      <div className="modalContainer3">
        <div className="titleCloseBtn3">
          <button
            onClick={() => {
              setOpenModal3(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>My passion Football</h1>
        </div>
        <div className="body">
          <p>Since my early years I have been playing and watching football. This is my true love!
              My favourite team that I support since I was 9 years old is Real Madrid.
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal3(false);
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

export default Modal3;