import React from "react";
import styled from "styled-components";

export default function ProductCard({ product, onClick }) {
  return (
    <CardWrapper onClick={onClick}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceInfo>
          <DiscountRate>{product.discountRate}%</DiscountRate>
          <PriceDetailInfo>
            <OriginalPrice>{product.price.toLocaleString()}원</OriginalPrice>
            <FinalPrice>{product.discountPrice.toLocaleString()}원</FinalPrice>
          </PriceDetailInfo>
        </PriceInfo>
      </ProductInfo>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  max-width: 256px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  height: 308px;
  background-color: var(--board);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 240px;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
`;

const ProductInfo = styled.div`
  padding: 5px;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  white-space: pre-line;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const DiscountRate = styled.div`
  color: #ff4400;
  font-weight: bold;
  font-size: 18px;
`;

const PriceDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
`;

const OriginalPrice = styled.div`
  text-decoration: line-through;
  color: #999;
  color: var(--disable);
  font-size: 10px;
`;

const FinalPrice = styled.div`
  font-size: 16px;
`;
