import styled from "styled-components";

interface CategoryBannerProps {
  images: string[];
  category: string;
  description: string;
  highlight: string;
}
const CategoryBanner: React.FC<CategoryBannerProps> = ({
  images,
  category,
  description,
  highlight,
}) => {
  return (
    <BannerWrapper>
      <BackgroundLayer>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              clipPath:
                index === 0
                  ? "polygon(0 0, 100% 0, 70% 100%, 0 100%)"
                  : index === 1
                  ? "polygon(30% 0, 100% 0, 70% 100%, 0 100%)"
                  : "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        ))}
      </BackgroundLayer>
      <CombinedImage>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              clipPath:
                index === 0
                  ? "polygon(0 0, 100% 0, 75% 100%, 0 100%)"
                  : index === 1
                  ? "polygon(25% 0, 100% 0, 75% 100%, 0 100%)"
                  : "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        ))}
      </CombinedImage>
      <ContentWrapper>
        <TextOverlay>
          <div>
            <p>{description}</p>
            <h3>{category}</h3>
          </div>
          <div>
            오픈기념 할인행사 <span>{highlight}</span> 적용 중!!
          </div>
        </TextOverlay>
      </ContentWrapper>
    </BannerWrapper>
  );
};
export default CategoryBanner;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 380px;
  overflow: hidden;
  background-color: #000;
`;

const BackgroundLayer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 260px;
  opacity: 0.3;

  div {
    height: 100%;
    background-size: 110%;
    background-position: center;
    &:nth-child(1) {
      z-index: 2;
      width: 35%;
    }

    &:nth-child(2) {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 1;
      clip-path: none;
    }

    &:nth-child(3) {
      z-index: 3;
      width: 35%;
      position: absolute;
      left: 65%;
    }
  }
`;

const CombinedImage = styled.div`
  position: absolute;
  transform: translateY(25%);
  z-index: 2;
  width: 380px;
  height: 186px;
  display: flex;
  overflow: hidden;

  div {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;

    &:nth-child(1) {
      z-index: 2;
      width: 38%;
    }

    &:nth-child(2) {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 1;
      clip-path: none;
    }

    &:nth-child(3) {
      z-index: 2;
      width: 38%;
      position: absolute;
      left: 62%;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 100%;

  div:nth-child(1) {
    display: flex;
    gap: 10px;
    align-items: baseline;

    h3 {
      font-size: 24px;
      font-weight: 400;
    }

    p {
      font-size: 16px;
    }
  }

  span {
    font-size: 1.25rem;
    color: var(--warning);
    font-weight: bold;
  }
`;
