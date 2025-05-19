import PageContainer from "components/layout/pageContainer";
import ProductBodyContainer from "components/product/productBodyContainer";
import ProductHeader from "components/product/productHeader";
import { PageProps } from "config/type";
import { ReactElement } from "react";

export default function ProductDetail({ router }: PageProps): ReactElement {
  return (
    <PageContainer>
      <ProductHeader id={router.query.id} />
      <ProductBodyContainer />
    </PageContainer>
  );
}
