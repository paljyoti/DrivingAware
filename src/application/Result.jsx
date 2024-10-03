import React from "react";
// import resultImage from "../../src/assets/img/result-3236285_1280.jpg";
import  resultImage  from  "../../src/assets/img/documents-paperwork-business-strategy-concept.jpg"
import resultImage1 from "../../src/assets/img/result-3249597_1280.jpg"

import "../css/result.css";

function Result() {
  return (

<div> 

<div className="imgResult">
        <img src={resultImage} alt="" />
        <div className="result-text">
          {/* <p>Result</p> */}
        </div>
      </div>

        <div className="result">

        <div className="resultImg">
          <img src={resultImage1} alt="" />
        </div>
        
      <div className="resultPara">
      <h1>RESULTS</h1>  
      <p className="text-black">
        Upon successful completion of the course, participants usually receive a
        certificate, which can be presented to the police or court to avoid
        penalty points. Instructors may provide feedback during the course to
        help participants improve their driving awareness.
      </p>
      <p className="text-black">
        After completing the theory test, candidates typically receive their
        results immediately. The result will indicate whether they have passed
        or failed both the multiple-choice and hazard perception sections. If
        successful, candidates will be provided with a pass certificate, which
        is essential for moving on to the practical driving test. In the event
        of a failure, candidates will receive feedback on their performance,
        including the areas where they need improvement. They can retake the
        theory test as soon as they feel prepared, although it’s advisable to
        study the areas where they struggled before attempting again.
      </p>
    </div>
    </div>
    </div>
  );
}

export default Result;
