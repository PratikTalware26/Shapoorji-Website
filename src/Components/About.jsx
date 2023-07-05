import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-cont">
      <div className="d-flex row-1">
        <div className="ab-head-cont">
          <h1>
            A Legacy Spread across 144 million sq. ft. and counting.
          </h1>
        </div>
        <div className="ab-img1-cont">
          <div className="ab-img1"></div>
        <div className="ab-img2-cont"></div>
        </div>
      </div>

      <div className="row-2 d-flex justify-content-between">
        <div className="d-flex flex-column r2-left-side w-100">
          <div className="ab-img3-cont">
            {/* <div className='ab-img4-cont'></div> */}
          </div>
          <div>
            <h2 className="r2-head">
              A solid foundation<br></br> across 8+ cities in India
            </h2>
          </div>
          <div className="ab-img4-cont"></div>
        </div>

        <div className="r2-right-side">
          <div>
            <h2>
              155+ years of <br></br> building landmarks, <br></br>from banks to
              hotels.
            </h2>
          </div>
          <div className="ab-img5-cont"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

