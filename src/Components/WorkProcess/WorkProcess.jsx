import React, { useState } from "react";
import "./workProcess.css";
import { FaPlay } from "react-icons/fa";
import videoBg from "../../assets/img/video-bg.jpg";
import Title from "../Shared/Title/Title";
import Lightbox from "../LightBox/LightBox";

const processList = [
  {
    // id: "01",
    title: "Step 01",
    desc: `After receiving a Notice of Intended Prosecution (NIP), drivers may be offered the course.`,
    delay: "100",
  },
  {
    // id: "02",
    title: "Step 02",
    desc: `Acceptance of the offer means avoiding penalty points and a fine, drivers may be offered the course..`,
    delay: "200",
  },
  {
    // id: "03",
    title: "Step 03",
    desc: `The course must be completed within a specified time, typically 12 weeks from the offer.`,
    delay: "300",
  },
];

const WorkProcess = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section className="hiw_area section-padding">
      <div className="container">
        <Title
          mainTitle={"How It works"}
          subTitle={"Save your time and money, Very easy to create your"}
          subTitleSpan={"writing content that converts"}
        />
        <div className="row  text-black">
          {processList.map(({ id, title, desc, delay }) => {
            return (
              <div
                key={id}
                className="col-lg-4 "
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="single_hiw">
                  <div className="sh_title">{id}</div>
                  <div className="single_hiw_content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
    
        </div>
        {/* <div className="row">
          <div
            className="col-lg-12 vp_top "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <div className="video_promotion">
              <img src={videoBg} className="img-fluid" alt="" />
              <div
                className="video-play"
                onClick={openLightbox}
              >
                <i>
                  <FaPlay />
                </i>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* {lightboxOpen && (
        <Lightbox
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/OUFcCoTx8zM"
        />
      )} */}
    </section>


   
  );
};

export default WorkProcess;
