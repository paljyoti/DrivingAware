import React from "react";
import "./banner.css";
import image from "../../assets/img/7025936.jpg"

// import vedio from "../../assets/img/8996418-uhd_3840_2160_30fps.mp4";
// import vedio from "../../assets/img/clideo_editor_8dc5ee77563240d2910832d363a783a0 (1).mp4"
// import vedio from "../../assets/img/6011545_Car_Vehicle_1920x1080.mp4"
// import vedio from "../../assets/img/5124696_Car_Vehicle_1920x1080.mp4"


import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" className="home_bg">
          
      <img src={image} style={{width:"100vw", height:"100vh", objectFit:"cover"}}  alt="" />

     {/* <video controls autoplay  muted loop  style={{width:"100vw", height:"100vh", objectFit:"cover"}}>
      <source src={vedio} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
       </video> */}


       {/* <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
            <div className="about_me_content text-black">
              <h1 className="cd-headline clip  text-black">
                Discover the best driving solutions for{" "}

                <span className="cd-words-wrapper text-black">
                  <TypeAnimation
                    sequence={[
                      "Safety",
                      1000,
                      "Efficiency",
                      1000,
                      "Enjoyment",
                      1000,
                      "Drive smart",
                      1000,
                      "Drive safe",
                      1000,
                      "Drive with us.",
                      1000,
                    ]}
                    wrapper="b"
                    speed={10}
                    deletionSpeed={0}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </h1>



              <p>
                This knowledge not only protects us and our passengers but also
                ensures a safer driving environment for everyone. By staying
                aware and informed, we can reduce accidents and make our roads
                safer for all.
              </p>
            </div>
            <div className="home_btn">
              <Link to="/contact" className="home_one">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>  */}
    </section>
  );
};

export default Banner;
