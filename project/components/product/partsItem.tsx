import { PartsType } from "config/constants";
import { ReactElement, useMemo } from "react";
import { PartsDto } from "src/dto/product/parts.dto";
import styled from "styled-components";

export default function PartsItem({ data }: { data: PartsDto }): ReactElement {
  const getPartsType = useMemo(() => {
    return PartsType.getPartsName(data.partsType);
  }, [data.partsType]);

  return (
    <ProductItem key={`parts_${getPartsType}_${data.id}`}>
      <div className={`typeBox ${data.isOption ? "is_option" : ""}`}>
        {getPartsType} {data.isOption ? "선택" : "기본"}
      </div>
      <div className="parts_data">
        <img src={data.imageUrl} alt={`${data.manufacturer} ${data.name}`} />
        <TitleBox $title={data.name} $manufacturer={data.manufacturer}>
          <p className="manufacturer">{data.manufacturer}</p>
          <p className="title">{data.name}</p>
        </TitleBox>
        <p className="spec">{data.spec}</p>
      </div>
    </ProductItem>
  );
}

const ProductItem = styled.li`
  width: 100%;
  height: 440px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 24px;
  position: relative;

  & > .typeBox {
    position: absolute;
    z-index: 10;
    width: 90px;
    height: 90px;
    word-break: keep-all;
    white-space: pre-wrap;
    text-align: center;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    color: var(--background);

    &.is_option {
      background-color: var(--secondary);
      color: var(--foreground);
    }
  }

  & > div.parts_data {
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    & > img {
      height: 180px;
      object-fit: contain;
    }

    & > .spec {
      font-size: 0.9rem;
      color: #999;
    }
  }
`;

const TitleBox = styled.div<{ $title: string; $manufacturer: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 0;

    &::before {
      z-index: -1;
      position: absolute;
      left: 0;
      color: #fff;
      -webkit-text-stroke: 4px var(--light);
    }

    &.manufacturer {
      font-size: 16px;
      color: var(--gray);

      &::before {
        content: "${({ $manufacturer }) => $manufacturer}";
      }
    }

    &.title {
      text-align: center;
      white-space: pre-wrap;
      word-break: keep-all;
      font-size: 24px;

      &::before {
        content: "${({ $title }) => $title}";
      }
    }
  }
`;
