"use client";

import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyImage from "components/lazyElements/lazyImage";
import ProductDto from "src/dtos/products/product.dto";
import { Swiper, SwiperSlide } from "swiper/react";

interface PopularProductsProps {
  list: ProductDto[];
}

export default function PopularProducts({ list }: PopularProductsProps) {
  return (
    <Swiper slidesPerView={3.8} spaceBetween={12} className="w-full h-full">
      {list.map((product) => (
        <SwiperSlide key={`popular_product_${product.id}`}>
          <div className="flex flex-col items-center justify-start w-full h-full p-2 bg-white border border-gray-400 rounded-lg gap-3 hover:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer">
            <LazyImage
              src={product.image}
              alt={product.name}
              className="w-full h-40 rounded-lg overflow-hidden"
              imageClass=" object-cover object-center"
            />
            <div className="flex flex-col items-start justify-start w-full gap-1">
              <h3 className="w-full mt-2 text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-end">
                {product.name}
              </h3>
              <div className="w-full flex items-center justify-end">
                <p className="text-gray-500 text-right line-through">
                  {product.price}원
                </p>
                <p className="text-red-500 text-right font-semibold ml-1 mr-2">
                  {product.discountRate}%
                </p>
                <p className="text-gray-900 text-right font-semibold">
                  {product.discountPrice.toLocaleString()}원
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end w-full gap-2">
              <div className="flex items-center justify-end gap-1">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="!w-4 !h-4"
                  color="red"
                />
                <p>{product.like}</p>
              </div>
              <div className="flex items-center justify-end gap-1">
                <FontAwesomeIcon icon={faBagShopping} className="!w-4 !h-4" />
                <p>{product.purchases}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
