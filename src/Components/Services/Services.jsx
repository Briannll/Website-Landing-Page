import React from "react";
import "./Services.css";
import service_1 from "../../Assets/services-1.png";
import service_2 from "../../Assets/services-2.png";
import service_3 from "../../Assets/services-3.png";
import service_icon_1 from "../../Assets/service-icon-1.png";
import service_icon_2 from "../../Assets/service-icon-2.png";
import service_icon_3 from "../../Assets/service-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="shoes" />
        <div className="caption">
          <img src={service_icon_1} alt="Shoes" />
          <p>Sneakers</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="clothes" />
        <div className="caption">
          <img src={service_icon_3} alt="Clothes" />
          <p>Apparel</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="trading" />
        <div className="caption">
          <img src={service_icon_2} alt="Trading" />
          <p>Exchange</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
