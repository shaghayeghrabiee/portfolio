import React from "react";
import CV from "../../asset/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets talk
      </a>
    </div>
  );
};

export default CTA;
