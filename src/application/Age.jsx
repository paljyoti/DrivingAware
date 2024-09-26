import React from "react";
import "../css/age.css";

function Age() {
  return (
    <div className="containers">
      <h1>ELIGIBILITY</h1>
      <p className="text-black">
        Age: At least 17 years old and possess a valid driving license. The
        course is offered as an alternative to prosecution for minor speeding
        offenses, typically for speeds within a certain threshold (e.g., 10%
        over the limit + 2 mph).Usually available only to first-time offenders
        or those who haven’t attended a course in the last three years.Not
        available for serious speeding offenses.
      </p>
      <p>
        To be eligible for the theory test in the UK, candidates must be at
        least 17 years old for cars and motorcycles (16 for mopeds) and hold a
        valid provisional driving license. They must have lived in England,
        Wales, or Scotland for at least 185 days in the past 12 months and
        should not be currently disqualified from driving. Booking the test
        online through the official DVSA website is also required. Meeting these
        criteria allows individuals to advance toward obtaining their driving
        license.
      </p>
    </div>
  );
}

export default Age;
