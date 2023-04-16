import React from "react";
import myPic from "../../asset/3.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="myPic">
        <img src={myPic} alt="about-myPic" className="image-about" />
      </div>
      <div>
        <div className="about-card"></div>
      </div>
    </section>
  );
};

export default About;
