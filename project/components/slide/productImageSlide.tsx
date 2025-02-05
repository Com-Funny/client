import styled from "styled-components";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MouseEvent, ReactElement, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Swiper as SwiperType } from "swiper";

interface IProps {
  list: string[];
}

export default function ProductImageSlide({ list }: IProps): ReactElement {
  const [visibleImage, setVisibleImage] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  const onClickNavigationImage = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;

    if (visibleImage === +id) return;

    setVisibleImage(+id);

    swiperRef.current?.swiper.slideToLoop(+id);
  };

  return (
    <ImageContainer>
      <div className="navigation">
        {list.map((image: string, index: number) => {
          const isVisiable = index === visibleImage;
          if (index < 5)
            return (
              <button
                key={`product_image_navigation_${index}`}
                className={isVisiable ? "active" : ""}
                onClick={onClickNavigationImage}
                data-id={index}
              >
                <img src={image} alt={`product_image_navigation_${index}`} />
                <div className="viewing_cover">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </button>
            );
        })}
      </div>
      <Container
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper: SwiperType) => {
          setVisibleImage(swiper.realIndex);
        }}
      >
        {list.map((image: string, index: number) => {
          if (index < 5)
            return (
              <SwiperSlide key={`product_image_${index}`}>
                <img src={image} alt={`product_image_${index}`} />
              </SwiperSlide>
            );
        })}
        <div className="bottom_background" />
      </Container>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: fit-content;
  display: flex;
  gap: 4px;

  & > div.navigation {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > button {
      flex-shrink: 0;
      position: relative;
      width: 89.6px;
      height: 89.6px;
      overflow: hidden;
      border-radius: 8px;
      border: 1px solid var(--border);

      &.active {
        cursor: default;

        & > .viewing_cover {
          opacity: 0.8;
        }
      }

      & > .viewing_cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--disabled);
        opacity: 0;
        color: var(--lightgray);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        transition: opacity 0.3s ease-in-out;
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Container = styled(Swiper)`
  flex-shrink: 0;
  width: calc(100% - 96px);
  height: 100%;
  max-width: 480px;
  max-height: 480px;
  border: 1px solid var(--border);
  border-radius: 16px;
  margin: 0;

  & > div.bottom_background {
    z-index: 9;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: var(--gradient);
  }

  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    user-select: none;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & .swiper-pagination {
    & > span {
      width: 12px;
      height: 12px;
      opacity: 0.5;

      &.swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--primary);
      }
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 24px;
    height: 24px;

    &:after {
      font-size: 22px;
      font-weight: 700;
      color: var(--primary);
    }
  }
`;
