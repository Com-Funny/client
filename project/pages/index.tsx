import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import CategoryViewModel from "src/viewModels/categoryProduct/categoryProduct.viewModel";
import IndicatorViewModel from "src/viewModels/indicator/indicator.viewModel";
import CategorySection from "components/category/CategorySection";
import styled from "styled-components";

function Home() {
  const router = useRouter();
  const indicatorViewModel = new IndicatorViewModel();
  const categoryViewModelRef = useRef(
    new CategoryViewModel({ router, indicatorViewModel })
  );
  const categoryViewModel = categoryViewModelRef.current;

  useEffect(() => {
    if (categoryViewModel.categories.length === 0) {
      categoryViewModel.initCategories();
    }
  }, [categoryViewModel]);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <Container>
      <CategoryWrapper>
        {categoryViewModel.categories.map((category, index) => (
          <CategorySection
            key={index}
            category={category}
            onProductClick={handleProductClick}
          />
        ))}
      </CategoryWrapper>
    </Container>
  );
}

export default observer(Home);

const Container = styled.div`
  width: 100%;
  padding: 240px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
