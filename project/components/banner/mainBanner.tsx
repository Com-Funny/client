import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useRef } from "react";
import { inject, observer } from "mobx-react";

function MainBanner() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SwiperContainer
      ref={swiperRef}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      spaceBetween={0}
      slidesPerView={"auto"}
      loop
    >
      <SwiperSlide></SwiperSlide>
    </SwiperContainer>
  );
}

export default inject("bannerViewModel")(observer(MainBanner));

const SwiperContainer = styled(Swiper)``;
