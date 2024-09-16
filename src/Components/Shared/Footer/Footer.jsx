import React from "react";
import "./footer.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const useFullLink = [
  {
    id: 1,
    title: "Policy's and Support",
    links: [
      "Privacy & Policy",
      "Term & conditions",
      "Refund Policy",
      "About Us",
      "Contact US",
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-xs-18">
            <div className="single_footer">
              <a href="index.html">{/* <img src={logo} alt="" /> */}</a>
              <p>
                Driving Awareness aims to offer customers a comprehensive <br />
                solution for their needs. It's important to note that we have no <br />
                affiliation with the government. As a third-party agency, we <br />
                charge fees for our services. However, utilizing our services <br />
                for test booking or driving license applications is optional. <br />
                Customers have the option to directly access government websites <br />
                for these services, where they may not encounter any additional <br />
                charges.
              </p>
            </div>
          </div>
          {useFullLink.map(({ id, links, title }) => {
            return (
              <div key={id} className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>{title}</h4>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link to={""}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="single_footer">
              <h4>Service's</h4>
              <ul>
                <li>
                  <a href="#">
                    <u>Theory Test</u>
                  </a>
                </li>
                <li>
                  <a href="#">Speed Awarness</a>
                </li>
                {/* <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>&copy; 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li>
                  <FaInstagramSquare size={25} />
                </li>
                <li>
                  <FaFacebook size={25} />
                </li>
                <li>
                  <BsTwitterX size={25} />
                </li>
                <li>
                  <FaLinkedinIn size={25} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
