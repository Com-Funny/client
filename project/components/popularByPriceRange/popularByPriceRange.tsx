import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import PriceFilter from "./priceFilter";
import { ProductDto } from "src/dto/product/product.dto";
import ProductList from "components/category/ProductList";
import PriceRangeProduct from "src/viewModels/product/priceFilteredProduct.viewModel";

interface IProps {
  onProductClick: (id: number) => void;
  priceRangeViewModel?: PriceRangeProduct;
}

function PopularByPriceRange({
  onProductClick,
  priceRangeViewModel,
}: IProps): ReactElement {
  useEffect(() => {
    priceRangeViewModel.setSelectedRangeIndex(0);
  }, [priceRangeViewModel]);

  if (!priceRangeViewModel) return <div>Store not found</div>;

  const { priceRanges, selectedRangeIndex, products } = priceRangeViewModel;

  const handlePriceRangeClick = (index: number) => {
    priceRangeViewModel.setSelectedRangeIndex(index);
  };

  return (
    <Container>
      <h3>가격대별 인기 제품</h3>

      <PriceFilter
        priceRanges={priceRanges}
        selectedIndex={selectedRangeIndex ?? 0}
        onSelect={handlePriceRangeClick}
      />

      <ProductListContainer>
        {products.length === 0 ? (
          <div>해당되는 상품이 없습니다.</div>
        ) : (
          <ProductList
            products={products as ProductDto[]}
            onProductClick={onProductClick}
          />
        )}
      </ProductListContainer>
    </Container>
  );
}

export default inject("priceRangeViewModel")(observer(PopularByPriceRange));

const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
  > h3 {
    font-size: 20px;
  }
`;

const ProductListContainer = styled.div``;
