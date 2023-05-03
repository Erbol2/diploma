import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./HomeList.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cyberpunk2077 from "../../assets/cyberpunk2077.jpeg"
import thewitcher3 from "../../assets/thewitcher3.jpg"
export default function HomeList() {
  // const swiper = new Swiper('.swiper', {
  //   autoplay: {
  //     delay: 5000,
  //   },
  // });
  return (
    <div className='HomeList'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}


      >
        <SwiperSlide>
          <div className='slider_img'>
            <img src={cyberpunk2077} alt='cyberpunk2077' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_img'>
            <img src={thewitcher3} alt='cyberpunk2077' />
          </div></SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  );
};