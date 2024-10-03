import React, { useEffect } from "react";
import "./services.css";
import Title from "../Shared/Title/Title";
import { Link } from "react-router-dom";
import { serviceList } from "../../Utlits/serviceList";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import { TypeAnimation } from "react-type-animation";

const Services = () => {
  return ( 
    <section id="service" className="best-service section-padding" style={{backgroundColor:"white"}}>
      <div className="container">
        <Title
          style={{ color: 'black' }} 
          mainTitle={"Application Procedure"}
          subTitle={"Speed awareness application procedure"}
          // subTitleSpan={"30+ use-cases"} 
        />
        <div className="row text-center">
          {serviceList.map(({ id, title, desc, icon, delay, link }) => {
            return (
              <div  key={id}  className="col-lg-4 col-sm-6 col-xs-12 " >
                 <Link to={link} > <ServiceCard  delay={delay} desc={desc} title={title} icon={icon} style={{backgroundColor: "#0cc0df"}} /></Link>
              </div>
            );
          })}

         {/* <div className="col-lg-12">
            <div className="ss_btn">
              <Link href="/usecase">View All Use Case</Link>
            </div>
          </div>  */}  
          
        </div>
      </div>
    </section>
  );
};

export default Services;
