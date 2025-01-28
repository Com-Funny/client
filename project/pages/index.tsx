import styled from "styled-components";
import CategoryBanner from "components/banner/categoryBanner";

export default function Home() {
  const banners = [
    {
      images: [
        "/images/bannerExample/bannerExample1.svg",
        "/images/bannerExample/bannerExample2.svg",
        "/images/bannerExample/bannerExample3.svg",
      ],
      category: "BUSINESS ZONE",
      description: "오래 사용할 수 있는 신뢰성",
      highlight: "12%",
    },
  ];

  return (
    <Container>
      {banners.map((banner, index) => (
        <CategoryBanner
          key={index}
          images={banner.images}
          category={banner.category}
          description={banner.description}
          highlight={banner.highlight}
        />
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 185px);
  display: flex;
  justify-content: center;
`;
