import React from "react";
import assessmentImage from "../../src/assets/img/assessment-analysics-audit-control-review-concept.jpg";
import assessmentImage1 from "../../src/assets/img/checklist-154274_1280.png";
import "../css/assessment.css";

function Assessment() {
  return (
    <div>
      <div className="imgassessment">
        <img src={assessmentImage} alt="" />
        <div className="assessment-text">
          {/* <p>Assessment</p> */}
        </div>
      </div>

      <div className="assessment">
        <div className="assessImg">
          <img src={assessmentImage1} alt="" />
        </div>

        <div className="assessmentPara">
          <h1>ASSESMENT</h1>
          <p className="text-black">
            There is usually no formal exam at the end of the
            course.Participants are often assessed through interactive
            discussions and activities to reinforce learning.Some providers may
            include quizzes or informal assessments to gauge understanding of
            the material.
          </p>
          <p className="text-black">
            The theory test in the UK consists of two main components:
            multiple-choice questions and a hazard perception test. In the
            multiple-choice section, candidates answer 50 questions related to
            road signs, traffic laws, and safe driving practices, needing a
            minimum score of 43 to pass. The hazard perception test assesses the
            ability to identify potential hazards through a series of video
            clips, requiring candidates to click when they perceive a hazard. A
            maximum score of 75 is possible, with a minimum of 44 needed to
            pass. Both sections must be completed successfully, and the total
            duration of the test is approximately 1 hour and 30 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
