import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "../styles/edtech.css";
import Carousel from "react-elastic-carousel";
import Edtechbanner from "../images/edtechbanner.png";
import edcourses from "../data/courses";
import Card from "../components/Card";
import news from "../data/technews";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Edtech = () => {
  const carouselRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  let resetTimeout;

  const handleEnd = () => {
    clearTimeout(resetTimeout);

    resetTimeout = setTimeout(() => {
      carouselRef?.current?.goTo(0);
    }, 2500);
  };

  const courses = useRef(null);

  const handleScroll = () => {
    window.scrollTo({
      top: courses.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="edtech">
        <div className=" container edtech_mainparent">
          <div className="edtech_subparent">
            <div className="edtech_header">
              <div className="edtech_headertextdiv">
                <h1>"No one has ever become poor by giving." </h1>
                <p>
                  Welcome to the donations page. Whatever you edtech make goes
                  straight into the club's fund.{" "}
                </p>
                <button className="btns" onClick={handleScroll}>
                  Explore courses
                </button>
              </div>

              <img src={Edtechbanner} className="edtech_banner" />
            </div>

            <div className="edtech_header2">
              <div className="edtech_header2textdiv">
                <p>Some latest tech news</p>
                <hr />
              </div>
              <Carousel
                ref={carouselRef}
                breakPoints={breakPoints}
                enableAutoPlay={autoPlay}
                isRTL={false}
                showButton={false}
                showArrows={false}
                pagination={false}
                autoPlaySpeed={2000}
                onNextEnd={handleEnd}
              >
                {news.map((item) => (
                  <>
                    <Card item={item} type="news" />
                  </>
                ))}
              </Carousel>
            </div>

            <div className="edtech_header2" ref={courses}>
              <div className="edtech_header2textdiv">
                <p>Here are some tech courses</p>
                <hr />
              </div>

              <div className="edtech_coursesparent">
                {edcourses.map((item) => (
                  <Card item={item} type="courses" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edtech;
