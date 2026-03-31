import "./about.css";
// import myImage from "../../assets/404.jpg";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";



const About = () => {
    return (
        <>
            <section className='about'>
                <div className='about__info'>
                    <h1>About Me</h1>
                    <span></span>
                    <p>
                        Hello everyone! I'm Sancho. My fullname is Komilov
                        Sultonsanjar. I'm 15 years old. I'm currently studying
                        at 52-school in Khorezm. <br /> <br /> Now I studying in
                        IT Park Khorezm. I learned Frontend Programming in IT
                        Park. My teacher's name is Shohruh Abdullayev. He is a
                        very good teacher. I like programming very much. My
                        hobbies are playing football, playing chess and reading
                        books. My favorite book is "Rich Dad Poor Dad" by Robert
                        Kiyosaki.
                    </p>
                </div>
                <div className='about__doing'>
                    <h3>What I'm Doing</h3>
                    <div className='doing__cards'>
                        <div className='one'>
                            {" "}
                            <div className='doing__card'>
                                <img src="/icon-dev.svg" alt='' />
                                <div>
                                    <h5>Frontend Programming</h5>
                                    <p>
                                        I really like this job. Because this job
                                        is amazing
                                    </p>
                                </div>
                            </div>
                            <div className='doing__card'>
                                <img
                                    src="/icon-design.svg"
                                    alt=''
                                />
                                <div>
                                    <h5>SMM Marketalog</h5>
                                    <p>
                                        This job is my childhood talent. i am
                                        not study for it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='two'>
                            <div className='doing__card'>
                                <img src="/icon-app.svg" alt='' />
                                <div>
                                    <h5>Making Edits</h5>
                                    <p>
                                        My Instagram Accaunt is vey amazing. I
                                        edit videos.
                                    </p>
                                </div>
                            </div>
                            <div className='doing__card'>
                                <img
                                    src="/icon-photo.svg"
                                    alt=''
                                />
                                <div>
                                    <h5>AI Specalist</h5>
                                    <p>
                                        I know a lot of Ai right now. This
                                        Generation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='test'>
                <h1>Testimonials</h1>
                <div className="test__cards">
                    <div className='test__card'>
                                <div className="test__img">
                                        <img src="/test3.jpg" alt='' />
                                    </div>
                                
                                <div className='card__info'>
                                    <h1>Ibrohim</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                    </div>
                    <div className='test__card'>
                                <div className="test__img">
                                        <img src="/test3.jpg" alt='' />
                                    </div>
                                
                                <div className='card__info'>
                                    <h1>Ibrohim</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                    </div>
                    <div className='test__card'>
                                <div className="test__img">
                                        <img src="/test3.jpg" alt='' />
                                    </div>
                                
                                <div className='card__info'>
                                    <h1>Ibrohim</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                    </div>
                    <div className='test__card'>
                                <div className="test__img">
                                        <img src="/test3.jpg" alt='' />
                                    </div>
                                
                                <div className='card__info'>
                                    <h1>Ibrohim</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                    </div>
                </div>
            </section>
            <section className='clients'>
                <h1>Clients</h1>
                <div className="swiper__imgs">
                    <img
                        src='https://api.logobank.uz/media/logos_png/IT_park-01.png'
                        alt=''
                    />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                    <img src="/404.png" alt="" />
                </div>
            </section>
            
        </>
    );
};
export default About;
