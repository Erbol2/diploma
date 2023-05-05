import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./HomeList.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { NavLink } from 'react-router-dom';

export default function HomeList({ category }) {
  // const swiper = new Swiper('.swiper', {
  //   autoplay: {
  //     delay: 5000,
  //   },
  // });
  const { products } = useContext(AppContext);

  const output = products
    .map(product => (
      <div key={product.id} className="HomeProduct">
        <NavLink to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </NavLink>
        <div className='content'>
          <NavLink to={'/products/' + product.slug}>
            {product.name}
          </NavLink>
          <span>{product.price} $</span>
        </div>
      </div>
    ))


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
        <SwiperSlide >
          <div className='slider_img'>
            {output[0]}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_img'>
            {output[3]}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_img'>
            {output[2]}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_img'>
            {output[4]}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};