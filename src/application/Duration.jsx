import React from "react";
import "../css/duration.css";

function Duration() {
  return (
    <div>
      <div className="headings">
        <h1>DURATION</h1>
      </div>

      <div className="containers">
        {/* <h1>DURATION</h1> */}
        <p className="text-black">
          A speed awareness course generally takes around 2 hours and 45
          minutes, While the total duration typically lasts about 4 to 5 hours,
          featuring helpful lessons and short breaks to keep you energized,
          depending on the provider, you can look forward to an engaging
          experience that helps you become a more aware driver!
        </p>
        <p>
          The duration of the theory test in the UK is typically about 1 hour
          and 30 minutes. During this time, candidates must complete
          multiple-choice questions and a hazard perception section. The test is
          designed to assess knowledge of road rules, traffic signs, and safe
          driving practices.
        </p>
      </div>
    </div>
  );
}

export default Duration;
