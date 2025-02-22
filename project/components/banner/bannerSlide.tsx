import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import SingleContentDisplay from "./singleContentDisplay";
import MultipleContentDisplayItem from "./multipleContentDisplayItem";
import BannerDto from "src/dto/banner/banner.dto";

interface BannerSlideProperties {
  bannerPage: BannerDto;
}

function BannerSlide({ bannerPage }: BannerSlideProperties): ReactElement {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SlideBackground $gradient={bannerPage.gradient}>
      <SlideContent>
        <TextSection>
          <Description>{bannerPage.description}</Description>
          <Title>{bannerPage.title}</Title>
          <Notice>{bannerPage.notice}</Notice>
        </TextSection>
        <ImageSection>
          {bannerPage.contents.length === 1 ? (
            <SingleContentDisplay
              content={bannerPage.contents[0]}
              gradient={bannerPage.gradient}
            />
          ) : (
            bannerPage.contents.map((content, index) => (
              <MultipleContentDisplayItem
                key={content.id}
                content={content}
                gradient={bannerPage.gradient}
                position={index === 0 ? "top" : "bottom"}
              />
            ))
          )}
        </ImageSection>
      </SlideContent>
      <WaveBackground $scrollPosition={scrollPosition} />
    </SlideBackground>
  );
}

export default BannerSlide;

const SlideBackground = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${({ $gradient }) => $gradient};
  position: relative;
  overflow: hidden;
`;

const SlideContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 900;
  color: var(--text);
  text-shadow: -2px -2px 0 var(--light), 2px -2px 0 var(--light),
    -2px 2px 0 #ffffff, 2px 2px 0 var(--light), 0px 4px 4px rgba(0, 0, 0, 0.4);
`;

const Notice = styled.div`
  color: var(--background);
  font-size: 1rem;

  white-space: pre-wrap;
  word-break: keep-all;
`;

const Description = styled.div`
  font-size: 1.5rem;
  color: var(--text);
  text-shadow: -1px -1px 0 var(--light), 1px -1px 0 var(--light),
    -1px 1px 0 var(--light), 1px 1px 0 var(--light),
    0px 4px 4px rgba(0, 0, 0, 0.4);
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 50%;
  position: relative;
  height: 100%;
  padding-left: 30px;
`;

const WaveBackground = styled.div<{ $scrollPosition: number }>`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200%;
    height: 100%;
    background: url("/images/bannerExample/bannerWave.svg") repeat-x;
    background-size: cover;
    transition: transform 0.8s ease-in-out;

    transform: translateX(${(props) => -(props.$scrollPosition * 0.9)}px);
    will-change: transform;
  }
`;
