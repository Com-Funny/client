"use client";
import CategoryBanner from "components/banner/categoryBanner";
import ProductList from "./ProductList";
import styled from "styled-components";

export default function CategorySection({ category, onProductClick }) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <BannerWrapper>
          <CategoryBanner
            images={category.images}
            category={category.category}
            description={category.description}
            highlight={category.highlight}
          />
        </BannerWrapper>
        <ProductSection>
          <SectionHeader>
            <CategoryTitle>{category.categoryInKorean}</CategoryTitle>
          </SectionHeader>
          <ProductList
            products={category.products}
            onProductClick={onProductClick}
          />
        </ProductSection>
      </ContentWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const BannerWrapper = styled.div`
  width: 380px;
  flex-shrink: 0;
`;

const ProductSection = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  min-width: 100px;
`;
