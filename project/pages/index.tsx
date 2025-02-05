import { inject, observer } from "mobx-react";
import { ReactElement, useEffect } from "react";
import CategoryViewModel from "src/viewModels/categoryProduct/categoryProduct.viewModel";
import CategorySection from "components/category/CategorySection";
import styled from "styled-components";
import PageContainer from "components/layout/pageContainer";
import { NextRouter } from "next/router";

interface HomeProps {
  router: NextRouter;
  categoryViewModel?: CategoryViewModel;
}

function Home({ router, categoryViewModel }: HomeProps): ReactElement {
  const { categories } = categoryViewModel;

  useEffect(() => {
    categoryViewModel.initCategories();
  }, []);

  console.log("category", categories);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <PageContainer>
      <CategoryWrapper>
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            category={category}
            onProductClick={handleProductClick}
          />
        ))}
      </CategoryWrapper>
    </PageContainer>
  );
}

export default inject("categoryViewModel")(observer(Home));

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
