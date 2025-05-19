import Banner from "components/client/banner/banner";
import PopularProducts from "components/client/swiper/popular";
import LazyImage from "components/lazyElements/lazyImage";
import Link from "next/link";
import bannerData from "src/mockdata/banners.json";
import popularData from "src/mockdata/popular.json";
import { PageUrlConfig } from "config/page.config";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Home() {
  const banners = bannerData.banners || [];
  const popular = popularData.popular || [];

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8 pb-4">
      <div className="w-full max-w-8xl h-fit flex flex-col items-start justify-start gap-8 p-4">
        <section className="w-full">
          <Banner images={banners} />
        </section>

        <section className="shrink-0 w-full h-fit flex flex-col items-start justify-start gap-4">
          <h2 className="text-base font-bold">
            <p>온라인 견적 인기구성 😉</p>
            <p>판매량 높은 인기 추천PC !</p>
          </h2>
          <PopularProducts list={popular} />
        </section>
        <section className="shrink-0 w-full h-64 rounded-xl shadow-md relative overflow-hidden">
          <Link
            href={PageUrlConfig.HOME}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
          >
            <LazyImage
              src="https://picsum.photos/600/400"
              alt="테스트 배너"
              className="w-full h-full rounded-lg overflow-hidden"
              imageClass=" object-cover object-center"
            />
          </Link>
          <p className="absolute left-1/2 top-1/2 text-white text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2">
            배너가 들어갈 자리
          </p>
        </section>
      </div>
      <div className="w-full flex items-center justify-center bg-gray-200 p-12">
        <section className="shrink-0 w-full max-w-8xl h-fit flex flex-col items-start justify-start gap-4 p-4">
          <h2 className="text-base font-bold">따끈따근 신규 등록 상품 🔥</h2>
          <div className="w-full h-fit grid gap-4 grid-cols-[50%_25%_25%]">
            <div className="w-full h-full bg-gray-300 rounded-xl row-start-1 row-end-3">
              <Link
                href={PageUrlConfig.HOME}
                className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
              >
                <p>신상품1</p>
              </Link>
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-xl">
              <Link
                href={PageUrlConfig.HOME}
                className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
              >
                <p>신상품2</p>
              </Link>
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-xl">
              <Link
                href={PageUrlConfig.HOME}
                className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
              >
                <p>신상품3</p>
              </Link>
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-xl">
              <Link
                href={PageUrlConfig.HOME}
                className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
              >
                <p>신상품4</p>
              </Link>
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-xl">
              <Link
                href={PageUrlConfig.HOME}
                className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in-out"
              >
                <p>신상품5</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
