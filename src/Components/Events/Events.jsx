import React from "react";
import "./Events.css";
import gallery_1 from "../../Assets/gallery-1.png";
import gallery_2 from "../../Assets/gallery-2.png";
import gallery_3 from "../../Assets/gallery-3.png";
import gallery_4 from "../../Assets/gallery-4.png";
import white_arrow from "../../Assets/white-arrow.png";

const Events = () => {
  return (
    <div className="events">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="arrow-button" />
      </button>
    </div>
  );
};

export default Events;
