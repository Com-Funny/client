import React from "react";
import styled from "styled-components";
import OrbitAnimation from "./orbitAnimation";
import BannerContentDto from "src/dto/banner/bannerContent.dto";

interface SingleContentDisplayProperties {
  content: BannerContentDto;
  gradient: string;
}

function SingleContentDisplay({
  content,
  gradient,
}: SingleContentDisplayProperties): React.ReactElement {
  const wrapperSize = 472;

  return (
    <SingleContentWrapper $size={wrapperSize}>
      <Benefit>{`혜택 ${content.id}`}.</Benefit>
      <Title>{content.description}</Title>
      <Description>{content.title}</Description>
      <ContentImage src={content.imageUrl} alt={content.title} />
      <OrbitAnimation gradient={gradient} size={wrapperSize} />
    </SingleContentWrapper>
  );
}
export default SingleContentDisplay;

const SingleContentWrapper = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

const ContentImage = styled.img`
  width: 100px;
  height: auto;
`;

const Benefit = styled.span`
  color: var(--primary);
  font-size: 24px;
  font-weight: 700;
  text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff,
    2px 2px 0 #ffffff, 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.span`
  color: var(--dark);
  font-size: 16px;
`;

const Description = styled.span`
  color: var(--text);
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff,
    2px 2px 0 #ffffff, 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: normal;
  overflow: hidden;
`;
