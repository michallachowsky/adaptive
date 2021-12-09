import React from "react";
import "./Modal5.css";

function Modal5({ setOpenModal5 }) {
  return (
    <div className="modalBackground5">
      <div className="modalContainer5">
        <div className="titleCloseBtn5">
          <button
            onClick={() => {
              setOpenModal5(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Cooking</h1>
        </div>
        <div className="body">
          <p>I have been always very passionate about cooking and also baking. I always helped my mother in the kitchen,
              while baking cakes, or cooking dinner. The love for cooking stayed with me, and whenever I feel like cooking it is always 
              a tasty experience!
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal5(false);
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

export default Modal5;