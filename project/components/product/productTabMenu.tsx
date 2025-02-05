import { MenuTabType } from "config/constants";
import { MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";

export default function ProductTabMenu({
  position,
  onClickTabMenu,
}: {
  position: number;
  onClickTabMenu: MouseEventHandler;
}): ReactElement {
  const tabs = Object.values(MenuTabType);

  return (
    <Container>
      <TabList>
        {tabs.map((tab: MenuTabType) => (
          <TabButton
            key={`${position}_${tab.label}`}
            onClick={onClickTabMenu}
            data-id={tab.id}
            className={position === tab.id ? "active" : ""}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
`;

const TabList = styled.div`
  display: flex;
  border: 1px solid var(--border);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-right: 1px solid var(--border);
  background: var(--background);
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  &:hover,
  &.active {
    background: var(--secondary);
  }
`;
