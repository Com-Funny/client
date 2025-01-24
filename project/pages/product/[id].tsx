import PageContainer from "components/layout/pageContainer";
import ProductTopInformation from "components/product/productTopInformation";
import { PageProps } from "config/type";

export default function ProductDetail({ router }: PageProps) {
  return (
    <PageContainer>
      <ProductTopInformation id={router.query.id} />
    </PageContainer>
  );
}
