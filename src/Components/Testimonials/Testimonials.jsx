import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../Assets/next-icon.png";
import back_icon from "../../Assets/back-icon.png";
import testimonials from "../../TestimonialsData";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((testimonials, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonials.img} alt="user image" />
                  <div>
                    <h3>{testimonials.name}</h3>
                  </div>
                </div>
                <p>{testimonials.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
