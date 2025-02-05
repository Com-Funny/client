import OptionSelector from "components/form/optionSelector";
import ProductImageSlide from "components/slide/productImageSlide";
import { inject, observer } from "mobx-react";
import { useEffect, useMemo } from "react";
import { ShippingDto } from "src/dto/product/shipping.dto";
import ProductViewModel from "src/viewModels/product/product.viewModel";
import styled from "styled-components";
import SelectedOptions from "components/form/selectedOptions";

interface IProps {
  productViewModel?: ProductViewModel;
  id: string | string[];
}

function ProductHeader({ productViewModel, id }: IProps) {
  const { detail, model } = productViewModel;

  useEffect(() => {
    if (id) {
      productViewModel.getDetail(+id);
    }
  }, [id]);

  const getTotalPrice = useMemo(() => {
    if (detail.parts.filter((part) => part.isOption).length === 0) {
      return detail.discountedPrice;
    }

    return model.options.reduce((acc, cur) => acc + cur.count * cur.price, 0);
  }, [model.options]);

  return (
    <Container>
      <ProductImageSlide list={detail.productImageUrls} />
      <div className="product_information">
        <h1>{detail.name}</h1>
        <ul>
          <li>
            <p>판매가</p>
            <div>
              <p className="highlight">{detail.discountRate}%</p>
              <p className="disabled">{detail.basePrice}</p>
              <p>{detail.discountedPrice.toLocaleString()}원</p>
            </div>
          </li>
          <li>
            <p>제조사</p>
            <div>
              <p>{detail.manufacturer}</p>
            </div>
          </li>
          <li>
            <p>배송정보</p>
            <div>
              {detail.shippingMethods.map(
                (ship: ShippingDto, index: number) => {
                  const isLast = index === detail.shippingMethods.length - 1;
                  return (
                    <p
                      className={!isLast ? "has_separator" : ""}
                      key={`ship_list_${index}`}
                    >
                      {ship.name}
                    </p>
                  );
                }
              )}
            </div>
          </li>
          <li>
            <p>배송비</p>
            <div>
              {detail.shippingMethods.map(
                (ship: ShippingDto, index: number) => {
                  const isLast = index === detail.shippingMethods.length - 1;

                  return (
                    <p
                      className={!isLast ? "has_separator" : ""}
                      key={`ship_cost_${index}`}
                    >
                      {ship.name}(
                      {ship.isFree
                        ? "무료배송"
                        : ship.price === 0
                        ? "착불"
                        : ship.price.toLocaleString()}
                      )
                    </p>
                  );
                }
              )}
            </div>
          </li>
          {detail.parts.filter((part) => part.isOption).length > 0 && (
            <li>
              <p>옵션선택</p>
              <div>
                <OptionSelector
                  options={detail.parts}
                  selected={model.options}
                  onClick={productViewModel.updateModel}
                  placeholder={"옵션 선택하기"}
                  disabled={false}
                />
              </div>
            </li>
          )}
        </ul>
        <div>
          <SelectedOptions
            productName={detail.name}
            options={model.options}
            onClick={productViewModel.updateModel}
          />
        </div>
        {getTotalPrice > 0 && (
          <p className="total_price">총 {getTotalPrice.toLocaleString()}원</p>
        )}
        <div className="buttons">
          <button disabled={model.options.length <= 0}>장바구니 담기</button>
          <button disabled={model.options.length <= 0} className="buy">
            구매하기
          </button>
        </div>
      </div>
    </Container>
  );
}

export default inject("productViewModel")(observer(ProductHeader));

const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: start;
  justify-content: space-between;

  & > div {
    height: 100%;

    &.product_information {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 8px;
      overflow: hidden;

      & > h1 {
        font-size: 32px;
        line-height: 36px;
        font-weight: 500;
        text-align: end;
      }

      & > ul {
        width: 100%;
        max-width: 580px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-bottom: 1px solid var(--border);
        padding: 12px 0;

        & > li {
          width: 100%;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;

          & > p {
            flex-shrink: 0;
            width: 84px;
            font-size: 24px;
            font-weight: 500;
            line-height: 36px;
          }

          & > div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 8px;
            font-size: 18px;
            font-weight: 500;
            line-height: 36px;
          }
        }
      }

      & > .total_price {
        width: 100%;
        max-width: 580px;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        text-align: end;
      }

      & .buttons {
        width: 100%;
        max-width: 580px;
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: auto;
        gap: 8px;

        & > button {
          width: 200px;
          height: 44px;
          font-size: 18px;
          font-weight: 500;
          line-height: 44px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--secondary);
          cursor: pointer;
          outline: none;

          &.buy {
            background: var(--primary);
            color: var(--background);
          }

          &:disabled {
            background: var(--disabled);
            cursor: not-allowed;
            color: var(--border);
          }
        }
      }
    }
  }
`;
