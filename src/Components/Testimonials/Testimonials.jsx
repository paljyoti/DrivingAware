import React from "react";
import "./testimonials.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import test_img from "../../assets/img/young-office-team-standing-in-modern-office-picjumbo-com.jpg";
import img1 from "../../assets/img/pexels-olly-785667.jpg";
import img2 from "../../assets/img/pexels-mastercowley-1300402.jpg";
import img3 from "../../assets/img/pexels-olly-834863.jpg";
import img4 from "../../assets/img/testimonial/img-4.png";
import Rating from "../Shared/Rating";

const reviewList = [
  {
    id: 1,
    name: "",
    post: "Marketer",
    image: img1,
    review: `The National Speed Awareness course in the UK is a valuable resource for drivers who have been caught speeding. As an alternative to receiving points on their driving license, this course aims to educate drivers and increase their awareness of road safety.`,
    rating: 4,
  },
  {
    id: 2,
    name: "John ",
    post: "Author",
    image: img2,
    review: `I appreciate the focus on helping drivers understand the consequences of their actions and strive to reduce the likelihood of reoffending. By providing valuable information and resources, this course can positively impact the overall safety of our roads.`,
    rating: 3,
  },
  {
    id: 3,
    name: "Lahan Sare Sahab",
    post: "Blogger",
    image: img3,
    review: `Overall, I highly support and recommend The National Speed Awareness course for its efforts in promoting responsible driving and creating safer roads for all.`,
    rating: 4,
  },
  {
    id: 4,
    name: "",
    post: "CEO",
    image: img4,
    review: `As someone who's been eagerly working towards getting my driving license, I recently tackled the UK theory test, and I have to say—what a revelation! The theory test is truly an essential milestone for all learner drivers, encompassing the nuts and bolts of safe driving, which is fundamental for new motorists and motorcyclists alike.`,
    rating: 3,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="testimonial_slider_btn">
      <button onClick={() => next()}>
        <BsChevronLeft />
      </button>
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="test_area section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Reviews</h2>
          <p>
            All the reviews loved by Customer Satisfaction rating from
            <span> 1300+ reviews on TrustPilot</span> & more
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="test_img">
              <img src={test_img} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial-slider">
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all 3"
                // transitionDuration={3000}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {reviewList.map(({ id, name, image, post, review, rating }) => {
                  return (
                    <div className="single_rev" key={id}>
                      <div className="rev_content">
                        <Rating star={rating} />
                        <p>{review}</p>
                      </div>
                      <div className="pic_content">
                        <div className="rev_pic">
                          <img src={image} className="img-fluid" alt="" />
                        </div>
                        <h4>{name}</h4>
                        <small className="post">{post}</small>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
