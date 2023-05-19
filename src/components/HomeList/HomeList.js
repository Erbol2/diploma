import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./HomeList.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { NavLink } from 'react-router-dom';
import Randomizer from '../Randomizer/Randomizer';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import AddToCart from '../AddToCart/AddToCart';

export default function HomeList() {
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
    ));
  const HomeProducts = products.map((product) => (
    <div key={product.id} className="Product">
      <NavLink to={"/products/" + product.slug}>
        <img src={product.picture} alt={product.name} />
      </NavLink>
      <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
      <span>{product.price} $</span>
      <AddToCart product={product} />
      <DeleteProduct product={product} />
    </div>
  ));


  return (
    <div className='HomeList'>
      <div className='top_home'>
        <div className='slider'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{ delay: 3000 }}
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
        <Randomizer />
      </div>
      <div className='bottom_home'>{HomeProducts}</div>
    </div>
  );
};