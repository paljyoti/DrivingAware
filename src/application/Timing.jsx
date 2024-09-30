import React from "react";
import timeImage from "../../src/assets/img/time-3216244_1280.jpg";
import timeImage1 from "../../src/assets/img/quitting-time-7259410_1280.png";
import "../css/timing.css";

function Timing() {
  return (

 <div>

   <div className="imgTime">
        <img src={timeImage} alt="" />
        <div className="timing-text">
          <p>Timing</p>
        </div>
      </div>
   
     <div className="timing">
     <div className="timeImg">
          <img src={timeImage1} alt="" />
        </div>

    <div className="TimingPara">
      <h1>TIMING</h1>
      <p className="text-black">
        Speed awareness courses in the UK vary by provider, typically offered
        throughout the week, including evenings and weekends. Most courses last
        between 2 to 4 hours. For classroom courses, choose a convenient venue,
        as you'll need to travel there. Alternatively, virtual courses can be
        attended from home. o If the police have offered you this course instead
        of Legal proceedings, you can find a provider on this site to book and
        pay for your course.
      </p>
      <p className="text-black">
        Theory test slots can typically be booked at various times throughout
        the week. Here are the general timings
      </p>
      <h2>Weekdays</h2>
      <p className="text-black">
        Morning: 8:00 AM to 12:00 PM <br /> Afternoon: 1:00 PM to 5:00 PM
      </p>
      <h2>Weekends</h2>
      <p className="text-black">
        Availability may vary by location, but many centers offer morning and
        early afternoon slots. It's advisable to check with your local test
        center or the official DVSA website for specific availability and to
        book your slot in advance, as popular times may fill up quickly.
      </p>
    </div>
    </div>
    </div>
  );
}

export default Timing;
