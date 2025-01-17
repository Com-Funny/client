import { StatusType } from "config/constants";
import { inject, observer } from "mobx-react";
import Link from "next/link";
import { useEffect } from "react";
import UserViewModel from "src/viewModels/user/user.viewModel";
import styled, { keyframes } from "styled-components";
interface IProps {
  userViewModel?: UserViewModel;
}

function UserProfileBox({ userViewModel }: IProps) {
  const { me, userDataStatus } = userViewModel;

  useEffect(() => {
    userViewModel.getMe();
  }, []);

  switch (userDataStatus) {
    case StatusType.FAILURE:
      return (
        <UserBox>
          <Link href="/login">로그인</Link>
        </UserBox>
      );

    case StatusType.SUCCESS:
      return (
        <UserBox>
          <img src={me.profile} alt="user profile" />
          <p>{me.name}</p>
        </UserBox>
      );

    default:
      return (
        <UserBox>
          <div className="circle" />
          <div className="text" />
        </UserBox>
      );
  }
}

export default inject("userViewModel")(observer(UserProfileBox));

const skeletonLoading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
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

  & > a {
    text-align: end;
    width: 84px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      color: var(--primary);
    }
  }

  & > .circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200px 120%;
    animation: ${skeletonLoading} 1.4s ease-in-out infinite;
  }

  & > .text {
    width: 84px;
    height: 16px;
    border-radius: 4px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 260px 120%;
    animation: ${skeletonLoading} 1.4s ease-in-out infinite;
  }
`;
