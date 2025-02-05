import { ReactElement } from "react";
import styled from "styled-components";

export default function ProductRefundTab(): ReactElement {
  return (
    <ShippingNotice>
      <h2>배송정보</h2>
      <div>
        <p>본 조립 PC는 주문 시 제작되는 ‘주문생산형’ 상품입니다.</p>
        <p>
          결제 시 해피콜로 안내 후 최종 확인 시 전량 새제품을 개봉하여 제작되며
          해피콜 거부 또는 미수신 시 배송이 늦어질 수 있습니다.
        </p>
        <p>
          일반적으로 주문 후 3일 내 제품을 받아보실 수 있으며 택배사 사정 또는
          부품재고 물량에 따라 늦어질 수 있습니다.
        </p>
        <p>
          배송택배사는 우체국과 CJ대한통운을 통해 발송됩니다. (주문내역에서 확인
          가능)
        </p>
      </div>
    </ShippingNotice>
  );
}

const ShippingNotice = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > h2 {
    font-size: 20px;
    font-weight: 500;
  }

  & > div {
    & > p {
      font-size: 16px;
      font-weight: 400;
      white-space: pre-wrap;
      word-break: keep-all;
    }
  }
`;
