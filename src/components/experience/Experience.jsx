import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="frontEnd">
          <h3>FrontEnd Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>React.Js</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text_light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backEnd">
          {" "}
          <h3>BackEnd Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Delphi</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Sql Server</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>DB2</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>C</h4>
                <small className="text_light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
