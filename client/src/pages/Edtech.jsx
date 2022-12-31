import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import "../styles/edtech.css"
import Carousel from "react-elastic-carousel";
import Newscard from '../components/Newscard';
import { ReactComponent as Edtechbanner } from '../assets/edtech/edtechbanner.svg'
import { useNavigate } from 'react-router-dom'
import edcourses from '../data/courses';
import Card from '../components/Card';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

const Edtech = () => {


    const [news, setNews] = useState([])

    const carouselRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(true);
    let resetTimeout;

    const handleMouse1 = () => {
        clearTimeout(resetTimeout);
        setAutoPlay(false);
    };

    const handleMouse2 = () => {
        setAutoPlay(true);
    };

    const handleEnd = () => {
        clearTimeout(resetTimeout);

        resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
        }, 2500);
    };


    function getRandomNumber() {
        return Math.floor(Math.random() * 3) + 1;
    }


    useEffect(() => {

        var pagenumber = getRandomNumber()

        fetch(`https://newsapi.org/v2/top-headlines?page=${pagenumber}&country=us&category=technology&apiKey=a98f473644254f348c9337e8851ba8d5`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setNews(data.articles)
            }
            )


    }, []);

    const courses = useRef(null);

    const handleScroll = () => {
        window.scrollTo({
            top: courses.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    };



    return (
        <>
            <div className=" container edtech_mainparent">
                <div className="edtech_subparent">



                    <div className="edtech_header">
                        <div className='edtech_headertextdiv'>
                            <h1>Educate women, change world. </h1>
                            <p>Welcome to the edtech page, here we have courses from women safety and all the way to coding ! </p>

                            <button className='btn btn-warning mt-3' onClick={handleScroll}  >Explore courses</button>

                        </div>
                        <Edtechbanner className="donate_banner" />

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
                            {news.map(item => (

                                <>
                                    {/* <Newscard item={item} /> */}
                                    <Card item={item} type="news" />

                                </>

                            ))}

                        </Carousel>
                    </div>

                    <div className="edtech_header2" ref={courses} >
                        <div className="edtech_header2textdiv">
                            <p>Here are some tech courses</p>
                            <hr />
                        </div>


                        <div className='edtech_coursesparent'>
                            {edcourses.map(item => (

                                <Card item={item} type="courses" />

                            ))}
                        </div>


                    </div>





                </div>
            </div>


        </>
    )
}

export default Edtech