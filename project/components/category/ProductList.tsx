import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onProductClick }) {
  return (
    <ListWrapper>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product.id)}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
