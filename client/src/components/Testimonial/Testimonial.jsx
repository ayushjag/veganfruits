import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonial.css'
import { testimonials } from '../../utils/data';

function Testimonial() {
    return (
        <>
            <div className="testimonial-container">
                <h1 className='testimonial-title'>Testimonials</h1>
                <Swiper
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                    }}
                    // slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        testimonials.map((item) =>
                            <SwiperSlide key={item.id}>
                                <div className="testimonials">
                                    <div className="testimonials-details">
                                        <span className="desc">{item.desc}</span>
                                    </div>
                                    <div className="profile-detail">
                                        <div className="profile-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="profile-name">
                                            <div className='name'>{item.name}</div>
                                            <div className='job'>{item.job}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial
