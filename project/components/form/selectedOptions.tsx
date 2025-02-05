import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateModelProps } from "config/type";
import { useRef } from "react";
import { PartsDto } from "src/dto/product/parts.dto";
import styled from "styled-components";

interface SelectedOptionProps {
  productName: string;
  options: PartsDto[];
  onClick: (data: updateModelProps) => void;
}

export default function SelectedOptions({
  productName,
  options,
  onClick,
}: SelectedOptionProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const onClickCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { type, id } = event.currentTarget.dataset;
    const target = options.find((option) => option.id === +id);
    if (target) {
      let newList = [];
      if (type === "MINUS") {
        if (target.count > 1) {
          newList = options.map((option) => {
            if (option.id === +id) {
              return { ...option, count: option.count - 1 };
            }
            return option;
          });
        } else {
          newList = options.filter((option) => option.id !== +id);
        }
      } else if (type === "PLUS") {
        newList = options.map((option) => {
          if (option.id === +id) {
            return { ...option, count: option.count + 1 };
          }
          return option;
        });
      }
      onClick({ target: "options", value: newList });
    }
  };

  const onScrollList = (event: React.WheelEvent<HTMLUListElement>) => {
    if (!listRef.current) return;

    listRef.current.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <SelectedOptionList onWheel={onScrollList} ref={listRef}>
      {options.map((option: PartsDto) => (
        <li key={`selected_option_${option.id}`}>
          <p className="truncate text-nowrap">
            {option.id === 0 ? productName : option.name}
          </p>
          <div>
            <Counter>
              <button
                onClick={onClickCounter}
                data-type="MINUS"
                data-id={option.id}
                disabled={option.id === 0 && option.count === 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className="text-nowrap">{option.count}</p>
              <button
                onClick={onClickCounter}
                data-type="PLUS"
                data-id={option.id}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Counter>
            <p className="text-nowrap">
              {(option.count * option.price).toLocaleString()}원
            </p>
          </div>
        </li>
      ))}
    </SelectedOptionList>
  );
}

const SelectedOptionList = styled.ul`
  width: min-content;

  max-height: 220px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: end;
  overflow-y: auto;
  gap: 8px;
  margin: 0;

  &:has(> :only-child) {
    gap: 0;
  }

  & > li {
    flex-shrink: 0;
    width: 260px;
    border-radius: 16px;
    padding: 12px 16px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--lightgray);

    & > p {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
    }
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  background: var(--light);

  & > button {
    width: 24px;
    height: 24px;
    border: 1px solid var(--border);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      background: var(--border);
      color: var(--light);
    }
  }

  & > p {
    border: 1px solid var(--border);
    width: 48px;
    height: 24px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
