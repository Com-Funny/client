import { inject, observer } from "mobx-react";
import styled, { keyframes } from "styled-components";
import IndicatorViewModel from "src/viewModels/indicator/indicator.viewModel";

interface IProps {
  indicatorViewModel?: IndicatorViewModel;
}

function ApiLoadingIndicator({ indicatorViewModel }: IProps) {
  return (
    <Background className={indicatorViewModel.indicator > 0 ? "active" : ""}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </Background>
  );
}

export default inject("indicatorViewModel")(observer(ApiLoadingIndicator));

const circle = keyframes`
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  `;

const shadow = keyframes`
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  `;

const Background = styled.div`
  position: fixed;
  z-index: 997;
  background: var(--dark);
  width: 100vw;
  height: 100vh;
  transition: all 0.4s ease;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 0.3;
    pointer-events: auto;
  }

  & .wrapper {
    width: 200px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .circle {
    z-index: 999;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background: var(--light);
    left: 15%;
    transform-origin: 50%;
    animation: ${circle} 0.5s alternate infinite ease;
  }

  & .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  & .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }

  & .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--primary);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: 998;
    left: 15%;
    filter: blur(1px);
    animation: ${shadow} 0.5s alternate infinite ease;
  }

  & .shadow:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  & .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }

  & .wrapper span {
    position: absolute;
    top: 75px;
    font-family: "Lato";
    font-size: 20px;
    letter-spacing: 12px;
    color: var(--light);
    left: 15%;
  }
`;
