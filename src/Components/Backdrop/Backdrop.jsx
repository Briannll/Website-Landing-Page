import React from "react";
import "./Backdrop.css";
import dark_arrow from "../../Assets/dark-arrow.png"

const Backdrop = () => {
  return (
    <div className="backdrop container">
      <div className="backdrop-text">
        <h1>The Next Generation of SneakerHeads</h1>
        <p>
          We are a group of sneaker enthusiasts with a vision to form a
          tight-knit community thats all about giving back and spreading good
          vibes.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Backdrop;
