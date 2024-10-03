import React from "react";
import durationImage from "../../src/assets/img/countdown-begins-antique-timer-sand-flowing-endlessly-generated-by-ai.jpg";
import "../css/duration.css";
import paraImage from "../../src/assets/img/049bb2fd-7e71-4400-8025-14e70bb51517.jpg";

function Duration() {
  return (
    <div>
      <div className="img">
        <img src={durationImage} alt="" />
        <div className="duration-text">
          <p>Duration: 3 hours</p>
        </div>
      </div>
      <div className="durationHeading">
        <div className="img2">
          <img src={paraImage} alt="" />
        </div>
        <div className="para">
          <h1>DURATION</h1>
          <p className="text-black">
            A speed awareness course generally takes around 2 hours and 45
            minutes. While the total duration typically lasts about 4 to 5
            hours, featuring helpful lessons and short breaks to keep you
            energized. Depending on the provider, you can look forward to an
            engaging experience that helps you become a more aware driver!
          </p>
          <p className="text-black">
            The duration of the theory test in the UK is typically about 1 hour
            and 30 minutes. During this time, candidates must complete
            multiple-choice questions and a hazard perception section. The test
            is designed to assess knowledge of road rules, traffic signs, and
            safe driving practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Duration;
