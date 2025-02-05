import { MouseEvent, ReactElement, useMemo, useState } from "react";
import { PartsDto } from "src/dto/product/parts.dto";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { PartsType } from "config/constants";
import { updateModelProps } from "config/type";
import Swal from "sweetalert2";

interface SelectorProps {
  options: PartsDto[];
  selected: PartsDto[];
  onClick: ({ target, value }: updateModelProps) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function OptionSelector({
  options,
  selected,
  onClick,
  placeholder,
  disabled,
}: SelectorProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getSamePartsType = (type: number) => {
    return options.find((option) => option.partsType === type);
  };

  const onClickSelectorBox = () => {
    if (getOptionList.length > 0) setIsOpen(!isOpen);
  };

  const onClickItem = (event: MouseEvent<HTMLLIElement>) => {
    const { id } = event.currentTarget.dataset;
    const target = options.find((option) => option.id === +id);
    const mainParts = getSamePartsType(target.partsType);
    const selectItemPrice = target.price - mainParts.price;

    if (selectItemPrice < 0) {
      Swal.fire({
        title: "다운그레이드",
        text: `선택 한 부품은 본 상품의 ${PartsType.getPartsName(
          mainParts.partsType
        )} 보다 낮은 등급입니다.\n추가하시겠습니까?\n(차액만큼 할인이 적용됩니다.)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "추가",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          onClick({
            target: "options",
            value: [...selected, { ...target, price: selectItemPrice }],
          });
          setIsOpen(false);
        }
      });
    } else {
      onClick({
        target: "options",
        value: [...selected, { ...target, price: selectItemPrice }],
      });
      setIsOpen(false);
    }
  };

  const getOptionList = useMemo(() => {
    const filtedOptions = options.filter(
      (option) =>
        option.isOption &&
        !selected.some((selected) => selected.id === option.id)
    );

    const setChangePartOption = filtedOptions.map((option: PartsDto) => {
      const mainParts = getSamePartsType(option.partsType);

      if (mainParts) {
        return {
          ...option,
          price: option.price - mainParts.price,
        };
      }

      return option;
    });

    return setChangePartOption;
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
              {option.price.toLocaleString() + "원"}
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
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
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
