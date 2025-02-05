import { PartsType } from "config/constants";
import { inject, observer } from "mobx-react";
import { ReactElement, useMemo, useState } from "react";
import { PartsDto } from "src/dto/product/parts.dto";
import ProductViewModel from "src/viewModels/product/product.viewModel";

import styled from "styled-components";
import PartsItem from "../partsItem";

interface PartsTableProps {
  productViewModel?: ProductViewModel;
}

function ProductDetailTab({ productViewModel }: PartsTableProps): ReactElement {
  const { detail } = productViewModel;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getTableElements = useMemo(() => {
    const { parts } = detail;
    const filteredMainParts = parts.filter((part) => !part.isOption);
    if (filteredMainParts.length === 0) return null;

    let elements = [];

    for (let i = 0; i < filteredMainParts.length; i += 2) {
      const leftParts = filteredMainParts[i];
      const rightParts = filteredMainParts[i + 1];

      elements.push(
        <tr key={`parts_spec_table_${leftParts.id}_${rightParts?.id ?? 0}`}>
          <PartLabelCell>
            {PartsType.getPartsName(leftParts.partsType)}
          </PartLabelCell>
          <PartValueCell>{leftParts.name}</PartValueCell>
          <PartLabelCell className="right_parts">
            {rightParts && PartsType.getPartsName(rightParts.partsType)}
          </PartLabelCell>
          <PartValueCell>{rightParts && rightParts.name}</PartValueCell>
        </tr>
      );
    }
    return elements;
  }, [detail.parts]);

  return (
    <ContentsContainer className={isOpen ? "open" : ""}>
      <StyledTable>
        <tbody>{getTableElements}</tbody>
      </StyledTable>
      <ProductData>
        <div className="background" />
        <div className="content">
          <div>
            <h2>부품정보</h2>
          </div>
          <ul>
            {detail.parts.map((parts: PartsDto) => (
              <PartsItem data={parts} />
            ))}
          </ul>
        </div>
      </ProductData>
      {!isOpen && (
        <div className="open_button">
          <button onClick={() => setIsOpen(true)}>상세정보 펼쳐보기</button>
        </div>
      )}
    </ContentsContainer>
  );
}

export default inject("productViewModel")(observer(ProductDetailTab));

const ContentsContainer = styled.div`
  max-height: 1400px;
  overflow: hidden;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  &.open {
    max-height: none;
  }

  & > div.open_button {
    z-index: 11;
    position: absolute;
    bottom: 0px;
    width: calc(100% - 32px);
    height: 160px;
    background: var(--gradient);

    & > button {
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 32px;
      background: var(--primary);
      color: var(--background);
      font-size: 18px;
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0;
  border-top: 1px solid var(--border);

  tr {
    border-bottom: 1px solid var(--border);
  }

  td {
    padding: 12px;
  }
`;

const PartLabelCell = styled.td`
  width: 100px;
  background-color: var(--background);
  font-size: 14px;
  font-weight: 500;
  border-right: 1px solid var(--border);

  &.right_parts {
    border-left: 1px solid var(--border);
  }
`;

const PartValueCell = styled.td`
  width: auto;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const ProductData = styled.div`
  position: relative;
  width: 100%;
  padding: 48px 32px;
  box-sizing: border-box;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: auto;
    min-height: 100%;

    background: repeating-linear-gradient(
      to bottom,
      #f5f5f5 0 440px,
      #e6e6e6 440px 880px
    );

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 32px;
      background-color: #1f2c5c;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    & > div {
      padding: 8px 80px;
      background: #1f2c5c;
      border-radius: 16px;

      & h2 {
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: var(--background);
      }
    }

    ul {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;
