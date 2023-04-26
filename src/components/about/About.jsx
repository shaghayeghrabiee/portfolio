import React from "react";
import myPic from "../../asset/2.jpg";
import { BsAward } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_img">
          <div>
            <img src={myPic} alt="about-myPic" className="about_img_myPic" />
          </div>
        </div>
        <div>
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>2 years Forntend - 4.5 years backend</small>
            </article>
            <article className="about-card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>In backend and frontend</small>
            </article>
          </div>
          <div className="about_content">
            <p>
              Passionate, driven, and competitive front-end developer with more
              than 6 years of experience as a software engineer with a
              demonstrated history of working in the information technology and
              services industry. Skilled in markup languages, e.g., Html, CSS,
              and scripting languages such as JavaScript and related frameworks
              like Bootstrap. Experienced proactively in React JS.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
