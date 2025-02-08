import React from "react";
import styled, { keyframes } from "styled-components";

interface OrbitAnimationProperties {
  gradient: string;
  size: number;
}

function OrbitAnimation({
  gradient,
  size,
}: OrbitAnimationProperties): React.ReactElement {
  function extractColorsFromGradient(gradient: string): string[] {
    const colorRegex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
    const colors = gradient.match(colorRegex);
    return colors ? colors : [];
  }

  const colors = extractColorsFromGradient(gradient);
  console.log(size);
  return (
    <OrbitContainer $size={size}>
      <RotatingWrapperFast>
        <SmallCircleOne $backgroundColor={colors[0]} $shadowColor={colors[1]} />
      </RotatingWrapperFast>
      <RotatingWrapperSlow>
        <SmallCircleTwo $backgroundColor={colors[0]} $shadowColor={colors[1]} />
      </RotatingWrapperSlow>
    </OrbitContainer>
  );
}
export default OrbitAnimation;

const OrbitContainer = styled.div<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  pointer-events: none;
  top: 0;
  left: 0;
  transform-origin: center center;
`;

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateAnimationSmall = keyframes`
  from { transform: rotate(0deg) translate(25px) rotate(0deg); }
  to { transform: rotate(360deg) translate(25px) rotate(-360deg); }
`;

const RotatingWrapperFast = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: center center;
  animation: ${rotateAnimation} 30s linear infinite;
`;

const RotatingWrapperSlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: center center;
  animation: ${rotateAnimationSmall} 30s linear infinite;
`;

interface SmallCircleProperties {
  $backgroundColor: string;
  $shadowColor: string;
}

const SmallCircleOne = styled.div<SmallCircleProperties>`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: 0 0 0 5px ${({ $shadowColor }) => $shadowColor};
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;

const SmallCircleTwo = styled.div<SmallCircleProperties>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: 0 0 0 5px ${({ $shadowColor }) => $shadowColor};
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;
