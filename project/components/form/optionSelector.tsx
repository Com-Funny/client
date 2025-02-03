import { MouseEvent, useMemo, useState } from "react";
import { PartsDto } from "src/dto/product/parts.dto";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { PartsType } from "config/constants";
import { updateModelProps } from "config/type";

interface SelectorProps {
  options: PartsDto[];
  selected: PartsDto[];
  onClick: ({ target, value }: updateModelProps) => void;
  productPrice: number;
  placeholder?: string;
  disabled?: boolean;
}

export default function OptionSelector({
  options,
  selected,
  onClick,
  productPrice,
  placeholder,
  disabled,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickSelectorBox = () => {
    if (getOptionList.length > 0) setIsOpen(!isOpen);
  };

  const onClickItem = (event: MouseEvent<HTMLLIElement>) => {
    const { id } = event.currentTarget.dataset;
    const target = options.find((option) => option.id === +id);
    let newList = [];
    if (target) {
      newList = [...selected, target];
    } else if (+id === 0) {
      newList = [
        ...selected,
        {
          id: 0,
          name: "기본상품",
          price: productPrice,
          image: "",
          partsType: 0,
          isOption: false,
          count: 1,
        },
      ];
    }
    onClick({ target: "options", value: newList });
    setIsOpen(false);
  };

  const getOptionList = useMemo(() => {
    const defaultOption = {
      id: 0,
      name: "기본상품",
      price: productPrice,
      image: "",
      partsType: 0,
      isOption: false,
      count: 1,
    };

    const filtedOptions = options.filter(
      (option) =>
        option.isOption &&
        !selected.some((selected) => selected.id === option.id)
    );

    const setChangePartOption = filtedOptions.map((option) => {
      const sameParts = options.find(
        (parts) => parts.partsType === option.partsType
      );

      if (sameParts) {
        return {
          ...option,
          price: option.price - sameParts.price,
        };
      }

      return option;
    });

    if (selected.find((selected) => selected.id === 0)) {
      return setChangePartOption;
    } else {
      return [defaultOption, ...setChangePartOption];
    }
  }, [options, selected]);

  return (
    <SelectContainer>
      <StyledSelect
        onClick={onClickSelectorBox}
        disabled={disabled || getOptionList.length <= 0}
      >
        <p className="text-left">{placeholder}</p>
      </StyledSelect>
      <DropdownIcon icon={faAngleDown} className={isOpen ? "active" : ""} />
      <OptionList className={isOpen ? "active" : ""}>
        {getOptionList.map((option: PartsDto) => (
          <li
            key={`option_list_${option.id}`}
            onClick={onClickItem}
            data-id={option.id}
          >
            <p className="truncate max-w-[340px]">
              {PartsType.getPartsName(option.partsType)} - {option.name}
            </p>
            <p className="truncate shrink-0">
              +{option.price.toLocaleString() + "원"}
            </p>
          </li>
        ))}
      </OptionList>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

const StyledSelect = styled.button`
  width: 100%;
  max-width: 320px;
  height: 36px;
  padding: 0 8px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 12px;
  pointer-events: none;
  transform: translateY(-50%);
  color: #333333;
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const OptionList = styled.ul`
  z-index: 10;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--background);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }

  & > li {
    width: 100%;
    line-height: 18px;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: var(--border);
    }
  }
`;
