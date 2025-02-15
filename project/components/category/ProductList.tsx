"use client";

import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { ProductDto } from "src/dto/product/product.dto";

interface ProductListProps {
  products: ProductDto[];
  onProductClick: (productId: number) => void;
}

export default function ProductList({
  products,
  onProductClick,
}: ProductListProps): ReactElement {
  return (
    <ListWrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} style={{ width: "auto" }}>
            <ProductCard
              product={product}
              onClick={() => onProductClick(product.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;
