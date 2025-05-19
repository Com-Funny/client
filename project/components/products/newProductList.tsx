"use client";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDto from "src/dtos/products/product.dto";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNewProducts } from "src/lib/queries/products";
import "swiper/css";

export default function NewProductList() {
  const { data = [], isLoading, isError, error } = useNewProducts();

  return (
    <div className="flex flex-col items-start justify-start w-full gap-2">
      <h1 className="text-lg font-semibold">신규 등록 상품</h1>

      <Swiper
        className="w-full h-48 !pb-3"
        slidesPerView="auto"
        wrapperClass="gap-3"
      >
        <SwiperSlide className="shrink-0 !w-40 h-40 !flex flex-col items-center justify-center gap-2 p-2 hover:opacity-80 transition-opacity duration-300 ease-in-out cursor-pointer bg-card shadow-default rounded-2xl">
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="#d9d9d9"
            className="!w-20 !h-24 rounded-xl overflow-hidden"
          />
          <p className="text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            상품등록
          </p>
        </SwiperSlide>
        {data.length > 0 ? (
          data.map((item: ProductDto) => {
            return (
              <SwiperSlide
                key={`new_product_${item.id}`}
                className="shrink-0 !w-40 h-40 !flex flex-col items-center justify-center gap-2 p-2 hover:opacity-80 transition-opacity duration-300 ease-in-out cursor-pointer bg-card shadow-default rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={`${item.name} image`}
                  className="w-full h-24 rounded-lg object-cover overflow-hidden"
                />
                <p className="text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.name}
                </p>
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide className="shrink-0 !w-60 h-40 bg-card rounded-2xl !flex items-center justify-center">
            <p className="text-gray-500">최근 등록 된 상품이 없습니다.</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
