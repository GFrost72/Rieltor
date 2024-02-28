import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';

const SwiperSlider = ({ slideSources }) => {
    return (
        <Swiper
            loop
            className="custom-slider"
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
			
            {
                slideSources.map((slideSource) => (
                    <SwiperSlide
                        className="swiper-custom-slide"
                        key={slideSource.src}
                    >
                        <img src={slideSource.src} alt={slideSource.alt} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};


export { SwiperSlider }
