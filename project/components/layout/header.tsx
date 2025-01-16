import { MenuType } from "config/constants";
import { inject, observer } from "mobx-react";
import Link from "next/link";
import { useEffect } from "react";
import UserViewModel from "src/viewModels/user/user.viewModel";
import styled from "styled-components";

interface IProps {
  userViewModel?: UserViewModel;
}

function Header({ userViewModel }: IProps) {
  useEffect(() => {
    userViewModel.getMe();
  }, []);

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
        <UserBox>
          <img src={userViewModel.me.profile} alt="user profile" />
          <p>{userViewModel.me.name}</p>
        </UserBox>
      </div>
    </HeaderContainer>
  );
}

export default inject("userViewModel")(observer(Header));

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border);

  & > div {
    max-width: 1440px;
    width: 100%;
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

const UserBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: end;

  & > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }

  & > p {
    font-size: 16px;
    font-weight: 600;
  }
`;
