import React from "react";
import "./chooseUs.css";
import { TfiCheck } from "react-icons/tfi";

import chosseImg from "../../assets/img/why-us-bg.jpg";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <section
      className="why_choose section-padding"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_content text-black">
              <h2>
                why choose <span className="text-black">us</span>
              </h2>
              <p>
                Empower your driving journey with are experties, design to raise
                driving awareness and streamline driving test bookings.Partners
                with us now to creating driving success story.
              </p>
              <ul>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Training With </strong>
                  </u>{" "}
                  best resources
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Free Access</strong>
                  </u>{" "}
                  to our traing data base
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Access To</strong>
                  </u>{" "}
                  our network of trainers
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Best Offers</strong>
                  </u>{" "}
                  and discount applicable
                </li>
              </ul>
            </div>
            <div className="ss_btn">
              <Link
                style={{ background: "#ffe06f", color: "black" }}
                to={"/contact"}
              >
                Get started
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_img">
              <img
                src={
                  "http://html.tonatheme.com/2021/drivega/assets/images/resource/image-7.jpg"
                }
                className="img-fluid"
                alt="image"
              />
              <div className="wc_year">
                <h3><Link to={"/contact"} style={{color:"black"}}> Book now</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

// #0cc0df ,#38b6ff ,#0097b2, #202020
