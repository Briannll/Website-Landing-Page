import React from "react";
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="upper empire logo" className="about-img" />
        <img src={play_icon} alt="play icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>Who Are We?</h3>
        <h2>Paving The Way for The Next Generation of Sneakerheads</h2>
        <p>
          Upper Empire emerged in 2022, founded by a group of passionate sneaker
          enthusiasts who envisioned creating more than just a community. Today,
          it stands as a close-knit family dedicated to spreading positivity and
          providing exceptional value to its members. Distinguished by our
          commitment to fair pricing and unmatched customer service, Upper
          Empire is not your ordinary sneaker group.
        </p>
        <p>
          We're devoted to facilitating legitimate transactions and ensuring a
          safe trading environment, thanks to our rigorous approvals process.
          Members can look forward to exclusive updates on the latest sneaker
          releases and Upper Empire merchandise.
        </p>
        <p>
          With an exciting year ahead, we invite you to stay connected and join
          us in our journey of giving back and sharing good vibes. Member-only
          events and giveaways are just a part of what makes our community
          special. Please stay tuned because we have a lot planned for the
          upcoming year!
        </p>
      </div>
    </div>
  );
};

export default About;
