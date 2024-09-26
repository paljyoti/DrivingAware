import React from "react";
import "./usecaseDetails.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";

import usecase from "../../assets/img/usecase.jpg";
import usecase2 from "../../assets/img/usecase2.jpg";
import usecase3 from "../../assets/img/usecase3.jpg";
import usecase4 from "../../assets/img/image_2024_09_26T07_50_27_786Z.png";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import { ScrollRestoration } from "react-router-dom";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

const list = [
  {
    id: 1,
    heading: "What is Speed Awareness Course?",
    // image: usecase,
    content: `A speed awareness course in the UK is designed to educate drivers who have been caught speeding. It serves as an alternative to receiving points on their driving license. The course focuses on road safety, aiming to reduce the likelihood of reoffending by increasing awareness of the dangers associated with speeding, the course can be taken in-person or online, lasting about 2 to 4 hours. It includes interactive discussions, videos, and practical activities to engage participants. Completing the course not only helps drivers avoid penalty points but also contributes to safer roads for everyone. `,
  },
  {
    id: 2,
    heading: "Advantages of this Test",
    // image: usecase2,
    // case_left: true,
    content: `Avoid 3-6 penalty points on your driving license. Avoid fines of up to £1,000 (or £2,500 for motorway speeding).Gain awareness of road safety, reducing the risk of future offences.Choose between in-person and online courses for your convenience.Enjoy an interactive experience without formal exams, making it more engaging.Help promote safer roads for everyone through improved driving behaviour. `,
  },
  {
    id: 3,
    heading: "Course Structure",
    // image: usecase3,
    content: `The course typically lasts 4 hours and is available in both classroom and online formats, featuring interactive group sessions. It covers essential topics such as speed limits and road safety laws, the consequences of speeding—including accidents, fatalities, and legal issues—along with practical tips for safe driving and maintaining compliance with speed limits. Additionally, participants will explore the psychology behind speeding and driver behavior. Notably, there is no test or exam at the end, fostering a more relaxed and engaging learning experience. `,
  },
  {
    id: 4,
    heading: "Effectiveness and Administration of the Course",
    // image: usecase4,
    // case_left: true,
    content: `Studies indicate that the course has effectively reduced reoffending rates while enhancing participants' understanding of speed-related dangers, contributing to overall improvements in road safety. Course providers, including the National Driver Offender Retraining Scheme (NDORS), offer these programs through local authorities or private providers. Accredited trainers ensure a high standard of education, making the courses both informative and impactful.`,
  },
  {
    id: 4,
    // image: usecase4,
    heading: "CONCLUSION",
    content: `Speed Awareness Courses offer a valuable opportunity for drivers to learn and improve.Promotes a safer driving culture across the UK.It’s not just about avoiding penalties—it's about saving lives.`,
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
              The National Speed Awareness
            </h2>
          </div>
          <div className="row" style={{ gap: "20px" }}>
            {list.map(({ id, heading, image, content, case_left }) => {
              return (
                <>
                  {case_left ? (
                    // ---------- Right side image
                    <div
                      style={{ background: "#ffe06f" }}
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
                      style={{ background: "#ffe06f" }}
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
