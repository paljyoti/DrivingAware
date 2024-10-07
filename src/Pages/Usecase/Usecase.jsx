import React from "react";
import "./usecase.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";

import use7 from "../../assets/img/image_2024_09_26T07_50_27_786Z.png";
import usecase2 from "../../assets/img/softwaretester_text_2.jpg";
import usecase3 from "../../assets/img/17.png";
import usecase4 from "../../assets/img/image_2024_09_26T07_50_27_786Z.png";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import { ScrollRestoration } from "react-router-dom";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

const list = [
  {
    id: 1,
    heading: "WHAT IS THEORY TEST?",
    // image: usecase,
    content: `The theory test in the UK is a mandatory exam for learner drivers  car and motorcyclists that assesses their knowledge of road rules, safety, and driving hazards. It consists of two parts: multiple-choice questions based on the Highway Code and a hazard perception test, where candidates watch video clips and identify potential hazards. Passing the theory test is required before taking the practical driving test.
The UK driving theory test is mandatory for obtaining a driving license. Required for both car and motorcycle licenses.Two parts: Multiple-choice questions and Hazard perception test.Cost: £23 for the theory test.Can book up to 6 months in advance.`,
  },
  {
    id: 2,
    heading: "Advantages of Theory Test",
    image: usecase2,
    case_left: true,
    content: `The theory test is essential for drivers, as it provides a solid understanding of traffic laws and regulations. It raises awareness of safe driving practices and helps identify potential hazards. This foundational knowledge boosts confidence and prepares individuals for the practical driving test. By ensuring all drivers meet basic standards, the test promotes safer roads and responsible driving behavior, ultimately enhancing readiness for real-world driving scenarios`,
  },
  {
    id: 3,
    heading: "Eligibility Criteria ",
    image: usecase3,
    content: `To take your theory or driving test in the UK, you must have lived in England, Wales, or Scotland for at least 185 days in the last 12 months prior to the test date. The costs for the tests are as follows: car and motorcycle tests cost £23, while lorry and bus tests include part 1a (multiple-choice questions) for £26, part 1b (hazard perception) for £11, and part 2 (case studies) for £23. Additionally, you must hold a provisional driving license, be at least 17 years old for cars and motorcycles (16 for mopeds), and have legal residency in the UK. `,
  },
  {
    id: 4,
    heading: "Course Structure and Content",
    // image: usecase4,
    case_left: true,
    content: `Part 1: Multiple-Choice Questions1. 50 questions in total.2.Need 43/50 to pass (86%). Topics covered:
Road signs and signals, Highway Code rules, Vehicle safety and rules of the road, Attitude, documents, accidents, and environmental issues.
Part 2: Hazard Perception Test 1.14 video clips, 15 developing hazards.2.Scored out of 75, with a pass mark of 44. Topics covered: Clips simulate real-life driving situations, Score based on how quickly the candidate identifies potential hazards, 5 points for early detection; points decrease as time goes on.`,
  },
  {
    id: 4,
    // image: usecase4,
    heading: "When you do not need a theory test",
    content: `You do not need to take a theory test before you book a driving test to upgrade:
an automatic car licence to a manual car licence
from category A1 (small motorcycle) to category A2 (medium motorcycle) if you’ve had the licence for at least 2 years
from category C1 (medium vehicles) to category C (large vehicles) unless you got your C1 entitlement from passing a car driving test
from category D1 (minibus)
 to category D (bus)

any licence to be able to tow a trailer
You do not need to take a theory test before you book a:
taxi driving test
tractor driving test.`,
  },
  {
    id: 5,
    heading: `Test Results and Requirements for Test Day`,
    content: `Important things you should bring at test time: Provisional driving license (photocard), Failure to bring the license results in a test cancellation, Arrive at least 15 minutes before your test.
Results are given immediately after the test.If Passed: You'll receive a pass certificate, valid for 2 years.
If Failed: You can retake the test after 3 working days.
`,
case_left: true,
  },
  {
    id: 6,
    heading: `Post-Test Outcomes and Common Failure Reasons`,
    content: `After passing the theory test: You can now book your practical driving test, The theory test pass certificate is valid for 2 years.
    Some common reasons for failing a test:
  Insufficient preparation, Not reading the Highway Code, Ignoring hazard perception practice,Failing to manage time well during the multiple-choice section.`,
  },
  {
   id:7,
   case_left: true,
   heading:`CONCLUSION`,
   image: use7,
   content:`The UK theory test is essential for road safety and driving knowledge. Adequate preparation is key to passing. Good luck on your journey to becoming a safe and responsible driver!`
  },
];
const UsecaseDetails = () => {
  return (
    <>
      {/* <PageHeader pageName={"Speed  awareness "} sortName={"speedAwareness Details"} /> */}
      {/* ---------- Start use case details */}
      <section
        className="best-service section-padding"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="section-title-two">
            <h2 className="" style={{ paddingTop: "25px" }}>
              The Theory Test
            </h2>
          </div>
          <div className="row" style={{ gap: "20px" }}>
            {list.map(({ id, heading, image, content, case_left }) => {
              return (
                <>
                  {case_left ? (
                    // ---------- Right side image
                    <div
                      style={{ background: "#ffe06f",marginLeft:"10px"  }}
                      key={id}
                      className="col-lg-10 offset-lg-1 col-xs-12"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div className="ss_case_two">
                        <div className="ss_case_left">
                          <h2>{heading}</h2>
                          <p>{content}</p>
                        </div>
                        <img src={image} alt="" />
                      </div>
                    </div>
                  ) : (
                    // ---------- Left side image
                    <div
                      style={{ background: "#ffe06f", marginRight:"90px" }}
                      key={id}
                      className="col-lg-10 offset-lg-1 col-xs-12"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div className="ss_case_one">
                        <img src={image} alt="" />
                        <h2>{heading}</h2>
                        <p>{content}</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* ---------- End use case details */}
      {/* <ChooseUs/> */}
      {/* <WorkProcess/> */}
      {/* <div className="section-padding"></div> */}
      <ScrollRestoration />
    </>
  );
};

export default UsecaseDetails;
