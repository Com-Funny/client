"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper } from "swiper/types";
import { useState, useRef, useCallback } from "react";
import ProgressBar from "components/common/progressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PageUrlConfig } from "config/page.config";

interface BannerProps {
  images: string[];
}

export default function Banner({ images }: BannerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper | null>(null);

  const onAutoplayTimeLeft = useCallback(
    (swiper: Swiper, time: number, value: number) => {
      if (swiper.realIndex !== currentIndex) {
        setProgress(0);
        setCurrentIndex(swiper.realIndex);
        return;
      }
      const percent = 100 - Math.round(value * 100);

      if (percent === progress) return;

      setProgress(percent);
    },
    [currentIndex, progress]
  );

  const onClickProgressBar = useCallback(
    (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideToLoop(index);
        setProgress(0);
        setCurrentIndex(index);
      }
    },
    [swiperRef]
  );

  const onClickPause = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    }
  }, [swiperRef]);

  const onClickPlay = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  }, [swiperRef]);

  return (
    <div className="shrink-0 w-full h-100">
      <SwiperComponent
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 4000,
        }}
        slidesPerView={1}
        loop={true}
        effect="fade"
        className="w-full h-full rounded-xl overflow-hidden"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`banner-slide-${index}`}>
            <Link href={PageUrlConfig.HOME} className="cursor-pointer">
              <img
                src={image}
                alt="슬라이드 이미지"
                className="w-full h-full object-cover object-center"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-4 right-4 w-fit max-w-300 flex items-center justify-end z-10 gap-4 px-4">
          {images.map((_, index) => (
            <ProgressBar
              index={index}
              active={currentIndex}
              progress={progress}
              onClick={onClickProgressBar}
              key={`banner-progress-${index}`}
            />
          ))}
          <button
            className="shrink-0 w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out"
            onClick={isPlaying ? onClickPause : onClickPlay}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} className="w-2.5 !h-4" />
            ) : (
              <FontAwesomeIcon icon={faPlay} className="w-2.5 !h-4" />
            )}
          </button>
        </div>
      </SwiperComponent>
    </div>
  );
}
