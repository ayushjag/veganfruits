import './Banner.css'
// import img1 from '../assests/banner.jpg'
import img1 from '../../assests/banner1.png'
import img2 from '../../assests/banner2.png'
import img3 from '../../assests/banner3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {

    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                navigation={true}



                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner
