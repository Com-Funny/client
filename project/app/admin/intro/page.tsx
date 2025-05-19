import DashBoardIntroduce from "components/introduce/dashBoardIntroduce";
import ProductIntroduce from "components/introduce/productIntroduce";

export interface IntroduceProps {
  data: ServerProps;
}

export interface ServerProps {
  title: string;
  description: string;
  images?: string[];
  image?: string;
}

export default function HomeIntroduce() {
  const dashBoardData = {
    title: "DASHBOARD",
    description: "필요한 정보를 한눈에 보는",
    images: [
      "/images/dashboard/product1.png",
      "/images/dashboard/product2.png",
      "/images/dashboard/product3.png",
      "/images/dashboard/product4.png",
      "/images/dashboard/product5.png",
    ],
  };

  const productData = {
    title: "PRODUCTS",
    description: "상품 매니지먼트",
    image: "/images/products/table.png",
  };

  return (
    <div className="w-full h-max flex flex-col items-center justify-start gap-8 mt-16">
      <div className="w-full h-190 relative shrink-0">
        <div className="bg-server w-full h-190 absolute top-0 z-0" />
        <h1 className="w-full h-200 absolute top-0 flex flex-col items-center justify-center z-10 text-gray-50">
          <p className="text-xl font-semibold animate-fade-in">
            편리한 차세대 관리시스템
          </p>
          <p className="text-4xl font-eczar font-semibold animate-fade-in-delay opacity-0">
            BACK OFFICE
          </p>
        </h1>
      </div>
      <ul className="w-full flex items-center justify-center gap-6 z-10 mb-12 shrink-0">
        <li className="flex items-center justify-center gap-2">
          <img
            src="/images/typescript.svg"
            className="w-10 h-10"
            alt="typescript icon"
          />
          <p className="text-xl font-semibold">TypeScript</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          <img src="/images/react.svg" className="w-10 h-10" alt="react icon" />
          <p className="text-xl font-semibold">ReactJS</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          <img
            src="/images/next.svg"
            className="w-10 h-10 p-2"
            alt="next icon"
          />
          <p className="text-xl font-semibold">NextJS</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          <img
            src="/images/nest.svg"
            className="w-10 h-10 p-2"
            alt="nest icon"
          />
          <p className="text-xl font-semibold">NestJS</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          <img src="/images/mysql.svg" className="w-10 h-10" alt="mysql icon" />
          <p className="text-xl font-semibold">MySQL</p>
        </li>
      </ul>
      <div className="pb-8 flex flex-col items-center justify-start gap-16">
        <DashBoardIntroduce data={dashBoardData} />
        <ProductIntroduce data={productData} />
      </div>
    </div>
  );
}
