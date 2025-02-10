import React, { useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import BannerViewModel from "src/viewModels/banner/banner.viewModel";
import BannerSlide from "./bannerSlide";
import BannerDto from "src/dto/banner/banner.dto";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MainBannerProperties {
  bannerViewModel?: BannerViewModel;
}

function MainBanner({
  bannerViewModel,
}: MainBannerProperties): React.ReactElement {
  const swiperReference = useRef<SwiperRef>(null);

  useEffect(() => {
    if (bannerViewModel) {
      bannerViewModel.getBanner();
    }
  }, [bannerViewModel]);

  return (
    <BannerWrapper>
      {/* 1440 */}
      <SwiperContainer
        ref={swiperReference}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={bannerViewModel?.list.length > 1}
        navigation
        pagination={{ clickable: true }}
      >
        {bannerViewModel?.list.map((bannerPage: BannerDto) => (
          // 1440 - 화살표width - 16
          <SwiperSlide key={bannerPage.id}>
            <BannerSlide bannerPage={bannerPage} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </BannerWrapper>
  );
}

export default inject("bannerViewModel")(observer(MainBanner));

const BannerWrapper = styled.div`
  width: 100%;
  height: 522px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      font-size: 30px;
      font-weight: bold;
    }
  }
  .swiper-button-next {
    right: 7%;
  }
  .swiper-button-prev {
    left: 7%;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 80px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .swiper-pagination-bullet {
    background: #ffffff;
    opacity: 0.7;
    width: 12px;
    height: 12px;
    margin: 0 8px;
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;
