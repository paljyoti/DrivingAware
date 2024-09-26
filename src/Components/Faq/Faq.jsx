import React from "react";
import "./faq.css";
import Title from "../Shared/Title/Title";

const accordionList = [
  {
    id: "headingOne",
    heading: "Can I have someone to help me with the technology?",
    content: `If you need some help with joining the course you may have someone at home to help you register, but they must leave before the course starts. Please let us know you may need extra help by calling 0345 600 1291 to discuss your needs. We may be able to offer log-in support by having a member of staff available to talk you through the  process at the start of your course if you have noone at home to help.`,
  },
  {
    id: "headingTwo",
    heading: "What do I need to join the course?",
    content: `Please ensure that you have your driving licence readily available. The easiest way to verify your identity is for you to show the trainer your photocard licence. If your licence does not include a photograph you will need to provide additional photographic evidence, such as a passport, or suitable alternative. You will not be able to participate without photographic ID. `,
  },
  {
    id: "headingtree",
    heading: "Can I change my course date?",
    content: `Course dates can only be changed in exceptional circumstances and in most cases, changing your course date will incur a £50 charge.`,
  },
  {
    id: "headingFour",
    heading: "What happens if I arrive late or do not attend?",
    content: `If you are late, you will not be admitted. Unless there are exceptional circumstances, you will have your file returned to the Police and the offer of a course withdrawn.
 If you do not attend your file would usually be returned to the Police. If you call the office to re-book and your file is still open, we may be able to book you onto another course, subject to Police timescales. Re-booking will incur a £50 fee.`,
  },
  {
    id: "headingFive",
    heading: "Is there a test? Can I fail?",
    content: `There is no test, but you must be present and complete the whole course, make a positive contribution through participating and show that you have a responsible attitude towards safe driving.You must also show respect for others on the course and their health and safety.`,
  },
];
const Faq = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="accordion" id="accordionExample">
            {accordionList.map(({ id, content, heading }, index) => {
              return (
                <div key={id} className="accordion-item">
                  <h2 className="accordion-header" id={id}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${id}`}
                    >
                      {heading}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className={`accordion-collapse ${
                      index === 0 ? "show" : "collapse"
                    }`}
                    aria-labelledby={id}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
