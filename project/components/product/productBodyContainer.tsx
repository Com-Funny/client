import { MouseEvent, ReactElement, useRef } from "react";
import styled from "styled-components";
import ProductDetailTab from "./tabs/productDetailTab";
import ProductTabMenu from "./productTabMenu";
import ProductQnATab from "./tabs/productQnATab";
import ProductReviewTab from "./tabs/productReviewTab";
import ProductRefundTab from "./tabs/productRefundTab";

export default function ProductBodyContainer(): ReactElement {
  const detailTabRef = useRef<HTMLDivElement>(null);
  const qnaTabRef = useRef<HTMLDivElement>(null);
  const reviewTabRef = useRef<HTMLDivElement>(null);
  const refundTabRef = useRef<HTMLDivElement>(null);

  const onClickTabMenu = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;
    switch (+id) {
      case 1:
        detailTabRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        qnaTabRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        reviewTabRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        refundTabRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <Container>
      <div ref={detailTabRef}>
        <ProductTabMenu position={1} onClickTabMenu={onClickTabMenu} />
        <ProductDetailTab />
      </div>
      <div ref={qnaTabRef}>
        <ProductTabMenu position={2} onClickTabMenu={onClickTabMenu} />
        <ProductQnATab />
      </div>
      <div ref={reviewTabRef}>
        <ProductTabMenu position={3} onClickTabMenu={onClickTabMenu} />
        <ProductReviewTab />
      </div>
      <div ref={refundTabRef}>
        <ProductTabMenu position={4} onClickTabMenu={onClickTabMenu} />
        <ProductRefundTab />
      </div>
    </Container>
  );
}

const Container = styled.div``;
