import React from "react";
import "./about.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const aboutUs = [
  {
    id: 1,
    title: "Vision & Mission",
    desc: `<p>
       The mission of the Speed Awareness Course and the Theory Test is to enhance road safety and promote responsible driving behavior by providing comprehensive knowledge of traffic laws, speed limits, and safe driving practices. These initiatives focus on preventing speed-related incidents, instilling a sense of responsibility among drivers, and equipping participants with the skills needed to make safe driving decisions. The vision is to create a culture of safe driving that reduces road traffic incidents and fatalities, allowing all road users—drivers, pedestrians, and cyclists—to navigate without fear. This includes fostering informed drivers who contribute to community safety, promoting lifelong learning about road safety, and adapting courses to address current challenges and advancements in driving technology. Through these efforts, the Speed Awareness Course and Theory Test aim to build a safer driving environment for present and future generations.
      </p>`,
  },
  {
    id: 2,
    title: "Who we are",
    desc: `<p>
   We are a dedicated team committed to promoting road safety and responsible driving through comprehensive educational programs. Our focus is on providing engaging and informative courses, such as the Speed Awareness Course and Theory Test, to empower drivers with the knowledge and skills they need to navigate the roads safely. We believe in fostering a culture of safety and responsibility among all road users, ultimately aiming to reduce accidents and enhance community well-being. Our team consists of experienced trainers and road safety advocates passionate about making a positive impact on driving behaviors and public safety.
  </p>
  <p>
                AiLife, the organization behind this AI, is a research lab that
                focuses on artificial intelligence and machine learning. It aims
                to promote and develop AI technology responsibly and ensure its
                positive impact on society.
              </p>
              <p>
                Together, you, as the user, and I, as the AI language model,
                form an interactive exchange of information, ideas, and
                knowledge. It's crucial to recognize that the AI is a tool to
                augment human capabilities and should be used responsibly and
                ethically in various applications.
              </p>
  `,
  },
  {
    id: 3,
    title: "Join our team",
    desc: ` <p>
    At our organization, we are passionate about promoting road safety and fostering responsible driving habits. We are always looking for dedicated individuals to join our team and contribute to our mission of making the roads safer for everyone. If you have a background in education, road safety, or a related field, and share our commitment to empowering drivers with knowledge and skills, we would love to hear from you.
    <u>
      <a href="mailto:example.com">rishabhbahree@gmail.com</a>
    </u>
  </p>`,
  },
  {
    id: 4,
    title: "Get in Touch with us",
    desc: ` <p>
   We’d love to hear from you! If you have any questions, feedback, or inquiries about our courses and initiatives, please don’t hesitate to reach out. Whether you’re interested in joining our team, need assistance with booking a course, or simply want to learn more about our mission, we are here to help.You can contact us via email at
    <u>
      <a href="mailto:example.com">rishabhbahree@gmail.com</a>
    </u>
    or fill out the contact form on our website.
  </p>`,
  },
];
const About = () => {
  return (
    <>
      {/* <PageHeader pageName="About Us" /> */}
      {/* -------- about start */}
      <section
        className="about-page section-padding"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            {aboutUs.map(({ id, title, desc }) => {
              return (
                <div key={id} className="ap-content">
                  <h1>{title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* -------- about End */}
      <ScrollRestoration />
    </>
  );
};

export default About;
