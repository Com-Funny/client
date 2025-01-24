import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import ProductViewModel from "src/viewModels/product/product.viewModel";
import styled from "styled-components";

interface IProps {
  productViewModel?: ProductViewModel;
  id: string | string[];
}

function ProductTopInformation({ productViewModel, id }: IProps) {
  const { detail } = productViewModel;

  useEffect(() => {
    if (id) {
      productViewModel.getDetail(+id);
    }
  }, [id]);

  return (
    <Container>
      <div className="product_image">
        <img src={detail.images[4]} />
        {/* {detail.images.map((image: string, index: number) => (
          <img src={image} key={`${index}_product_image`} />
        ))} */}
      </div>
      <div className="product_information">
        <h1>{detail.name}</h1>
        <ul>
          <li>
            <p>판매가</p>
            <div>
              <p>{detail.discountRate}%</p>
              <p>{detail.price}</p>
              <p>{detail.discountPrice}</p>
            </div>
          </li>
          <li>
            <p>제조사</p>
            <div></div>
          </li>
          <li>
            <p>배송정보</p>
            <div></div>
          </li>
          <li>
            <p>배송비</p>
            <div></div>
          </li>
          <li>
            <p>옵션선택</p>
            <div></div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default inject("productViewModel")(observer(ProductTopInformation));

const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  & > div {
    overflow: hidden;
    height: 100%;

    &.product_image {
      flex-shrink: 0;
      border: 1px solid var(--border);
      border-radius: 16px;
      width: 480px;
      height: 480px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 80%;
        object-fit: contain;
      }
    }

    &.product_information {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-between;
      padding: 16px;

      & > h1 {
        font-size: 32px;
        font-weight: 500;
        text-align: end;
      }

      & > ul {
        height: 190px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-bottom: 1px solid var(--border);

        & > li {
          height: 30px;
          display: flex;
          justify-content: space-between;

          & > p {
            width: 84px;
            font-size: 24px;
            font-weight: 500;
          }

          & > div {
            width: calc(100% - 84px);
          }
        }
      }
    }
  }
`;
