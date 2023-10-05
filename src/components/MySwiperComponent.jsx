import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/bundle';

const StyledSwiper = styled(Swiper)`
max-width: 1900px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
margin-right:0;
cursor: pointer;
`;

const SlideImage = styled.img`
max-width: 30rem;
border-radius: 5rem;
`;


const MySwiperComponent = () => {
  return (
    <StyledSwiper
      spaceBetween={100}
      slidesPerView={4}
      loop={true} // Habilita el bucle
      effect="slide" // Configura el efecto de tarjeta
      autoplay={{ delay: 2000 }} // Configura el tiempo de cambio automático (en milisegundos)
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <StyledSwiperSlide  >
        <SlideImage src="/public/img/cerrar-concepto-idea.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideImage src="/public/img/7941661_3400331.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideImage src="/public/img/mano-cultivo-germen-planta.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideImage src="/public/img/7941661_3400331.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideImage src="/public/img/7941661_3400331.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideImage src="/public/img/7941661_3400331.jpg" alt="Image 1" />
      </StyledSwiperSlide>
      {/* ... */}
    </StyledSwiper>
  );
};

export default MySwiperComponent;
