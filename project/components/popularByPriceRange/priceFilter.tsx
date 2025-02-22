import React from "react";
import styled from "styled-components";

interface PriceRange {
  label: string;
  minPrice: number;
  maxPrice?: number;
}

interface PriceRangeFilterProps {
  priceRanges: PriceRange[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

export default function PriceFilter({
  priceRanges,
  selectedIndex,
  onSelect,
}: PriceRangeFilterProps) {
  return (
    <FilterContainer>
      {priceRanges.map((range, index) => (
        <FilterButton
          key={index}
          className={selectedIndex === index ? "active" : ""}
          onClick={() => onSelect(index)}
        >
          {range.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  width: 120px;
  height: 32px;
  border: 1px solid var(--text);
  border-radius: 16px;
  cursor: pointer;
  background-color: #fff;
  font-size: 14px;
  &.active {
    background-color: var(--primary);
    color: #fff;
    border-color: var(--primary);
    cursor: default;
  }
`;
