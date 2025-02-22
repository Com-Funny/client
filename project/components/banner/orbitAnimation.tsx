import React from "react";
import styled, { keyframes } from "styled-components";

interface OrbitAnimationProperties {
  gradient: string;
  size: number;
  variant?: "top" | "bottom";
}

function OrbitAnimation({
  gradient,
  size,
  variant = "top",
}: OrbitAnimationProperties): React.ReactElement {
  function extractColorsFromGradient(gradient: string): string[] {
    const colorRegex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
    const colors = gradient.match(colorRegex);
    return colors ? colors : [];
  }

  const colors = extractColorsFromGradient(gradient);
  return (
    <OrbitContainer $size={size}>
      <RotatingWrapperFast>
        <SmallCircleOne
          $backgroundColor={colors[0]}
          $shadowColor={colors[1]}
          $variant={variant}
        />
      </RotatingWrapperFast>
      <RotatingWrapperSlow>
        <SmallCircleTwo
          $backgroundColor={colors[0]}
          $shadowColor={colors[1]}
          $variant={variant}
        />
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

const rotateAnimationRight = keyframes`
from { transform: rotate(360deg) translate(25px) rotate(-360deg); }
to { transform: rotate(0deg) translate(25px) rotate(0deg); }
`;

const rotateAnimationSmall = keyframes`
  from { transform: rotate(0deg) translate(25px) rotate(0deg); }
  to { transform: rotate(360deg) translate(25px) rotate(-360deg); }
`;

const RotatingWrapperFast = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateAnimationRight} 30s linear infinite;
`;

const RotatingWrapperSlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateAnimationSmall} 30s linear infinite;
`;

interface SmallCircleProperties {
  $backgroundColor: string;
  $shadowColor: string;
  $variant: "top" | "bottom";
}

const SmallCircleOne = styled.div<SmallCircleProperties>`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: 0 0 0 5px ${({ $shadowColor }) => $shadowColor};

  top: ${({ $variant }) => ($variant === "top" ? "20%" : "90%")};
  left: ${({ $variant }) => ($variant === "top" ? "0%" : "15%")};
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
  opacity: 0.7;

  top: ${({ $variant }) => ($variant === "top" ? "80%" : "50%")};
  left: ${({ $variant }) => ($variant === "top" ? "80%" : "100%")};

  transform: translate(-50%, -50%);
`;
