import UserProfileBox from "components/user/userProfileBox";
import { MenuType } from "config/constants";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <LogoBox>
          <div />
          <p>트래블피씨</p>
        </LogoBox>
        <MenuBox>
          <ul>
            {Object.keys(MenuType).map((key) => {
              const menu = MenuType[key];

              return (
                <li key={`${key}_menu_${menu.name}`}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </MenuBox>
        <UserProfileBox />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border);
  width: 100%;

  & > div {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  & > div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-image: var(--logo);
    background-size: cover;
    background-repeat: no-repeat;
  }

  & > p {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary);
  }
`;

const MenuBox = styled.nav`
  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    & > li > a {
      padding: 16px;
      font-size: 16px;
      font-weight: 600;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
