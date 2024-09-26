import React from "react";
import { GiAvoidance } from "react-icons/gi";
import { SiInfracost } from "react-icons/si";
import { GiDodge } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { FaTrafficLight } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaRoadCircleExclamation } from "react-icons/fa6";
import { MdOutlineDriveEta } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiBoost } from "react-icons/si";
import { GiCartwheel } from "react-icons/gi";
import "./pracing.css";


const pricingList = [
  {
    id: 1,
    planName: "The National Speed Awareness",
    amount: "£80-£110" ,
    time: "Monthly",
    upgrade_price: "Upgrade as you need",
    feature: [
      {
        id: 1,
        name: "Avoid penalty points. ",
        icon: <GiAvoidance />,
      },
      {
        id: 2,
        name: "Prevent costly fines for cars. ",
        icon: <SiInfracost />,
      },
      {
        id: 3,
        name: "Dodge hefty fines for motors.",
        icon: <GiDodge />,
      },

      {
        id: 4,
        name: "Promote road safety.",
        icon: <FaRoad />,
      },
      {
        id: 5,
        name: "Minimize future offences.",
        icon: <SiFuturelearn />,
      },
      // {
      //   id: 6,
      //   name: "Write in 30+ languages",
      //   icon: <TfiFlag />,
      // },
    ],
    delay: "100",
    isStart: "Book Now",
  },
  {
    id: 2,
    planName: "Theory test Car & Mopeds",
    amount: "£23",
    time: "Monthly",
    upgrade_price: "$348 Per Year",
    feature: [
      {
        id: 1,
        name: "Legal residency in the UK.",
        icon: <FaHome />,
      },
      {
        id: 2,
        name: "Know traffic laws.",
        icon: <FaTrafficLight />,
      },
      {
        id: 3,
        name: "Master safe driving.",
        icon: <MdHealthAndSafety />,
      },

      {
        id: 4,
        name: "Identify road hazards.",
        icon: <FaRoadCircleExclamation />,
      },
      {
        id: 5,
        name: "Build driving confidence.",
        icon: <MdOutlineDriveEta />,
      },
      // {
      //   id: 6,
      //   name: "Write in 30+ languages",
      //   icon: <TfiFlag />,
      // },
    ],
    delay: "200",
    isStart: "Book Now",
  },
  {
    id: 3,
    planName: "Theory test Lorry & Bus",
    amount: "£60",
    time: "Monthly",
    upgrade_price: "$588 Per Year",
    feature: [
      {
        id: 1,
        name: "Legal residency in the UK. ",
        icon: <FaHome />,
      },
      {
        id: 2,
        name: "Know vehicle regulations.",
        icon: <FaTrafficLight />,
      },
      {
        id: 3,
        name: " Improve safety practices ",
        icon: <AiFillSafetyCertificate />,
      },

      {
        id: 4,
        name: "Master vehicle maneuvering.",
        icon: <GiCartwheel />,
      },
      {
        id: 5,
        name: "Boost test readiness.",
        icon: <SiBoost />,
      },
      // {
      //   id: 6,
      //   name: "Write in 30+ languages",
      //   icon: <TfiFlag />,
      // },
    ],
    delay: "300",
    isStart: "Book Now",
  },
];
const Pracing = () => {
  return (
    <div className="container">
      <div className="row">
        {pricingList.map(
          ({
            id,
            planName,
            feature,
            amount,
            delay,
            time,
            upgrade_price,
            isStart,
          }) => {
            return (
              <div
                key={id}
                className="col-lg-4 col-sm-6 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="pricing_design">
                  <div className="single-pricing">
                    <div className="price-head">
                      <h2>{planName}</h2>
                      <h1 className="price">{amount}</h1>
                      <span style={{color:"#ffe06f"}}>/{time}</span>
                      <span className="upgrade_price">{upgrade_price}</span>
                    </div>
                    <ul>
                      {feature.map(({ id, icon, name }) => {
                        return (
                          <li key={id}>
                            <span>{icon}</span> {name}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="pricing-price"></div>
                    <a href="#" className="price_btn">
                      {isStart}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Pracing;
