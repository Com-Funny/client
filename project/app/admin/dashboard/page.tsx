import CardBox from "components/box/cardBox";
import Alarms from "components/dashboard/alarms";
import LazyImage from "components/lazyElements/lazyImage";
import dashboard from "src/mockdata/dashboard.json";

const mockData = dashboard;

export default function DashBoard() {
  return (
    <div className="flex flex-col gap-8 p-4 shrink-0">
      <Alarms list={mockData.alarm} />
      <div className="w-full h-full flex flex-col gap-2">
        <h2 className="font-semibold text-xl">종합차트</h2>
        <CardBox className="w-full h-80 p-4">
          <p>차트</p>
        </CardBox>
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <h2 className="font-semibold text-xl">상품추이</h2>
        <div className="flex flex-wrap gap-4">
          {mockData.products.map((item) => (
            <CardBox
              className="w-52 h-fit p-3 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              key={`product_list_${item.id}`}
            >
              <p className="text-xl font-semibold">{item.name}</p>
              <LazyImage
                src={item.image}
                alt={`${item.name} image`}
                className="w-full h-26 rounded-lg object-cover overflow-hidden"
              />
              <div className="flex flex-col item-start justify-center w-full gap-3">
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0 text-base font-semibold">
                    구분
                  </p>
                  <p className="w-full h-5 text-end text-base font-semibold">
                    미해결
                  </p>
                  <p className="w-full h-5 text-end text-base font-semibold">
                    합계
                  </p>
                </div>
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0">판매</p>
                  <p className="w-full h-5 text-end">{item.sales}</p>
                  <p className="w-full h-5 text-end">{item.sales}</p>
                </div>
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0">문의</p>
                  <p className="w-full h-5 text-end">{item.contact}</p>
                  <p className="w-full h-5 text-end">{item.contact}</p>
                </div>
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0">리뷰</p>
                  <p className="w-full h-5 text-end">{item.review}</p>
                  <p className="w-full h-5 text-end">{item.review}</p>
                </div>
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0">반품</p>
                  <p className="w-full h-5 text-end">{item.return}</p>
                  <p className="w-full h-5 text-end">{item.return}</p>
                </div>
                <div className="flex items-center justify-center w-full h-5">
                  <p className="w-16 h-5 shrink-0">교환</p>
                  <p className="w-full h-5 text-end">{item.exchange}</p>
                  <p className="w-full h-5 text-end">{item.exchange}</p>
                </div>
              </div>
            </CardBox>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <h2 className="font-semibold text-xl">정산요약</h2>
        <CardBox className="w-full h-fit p-4 hover:scale-101 transition-transform duration-300 ease-in-out cursor-pointer">
          <div className="flex items-center justify-between w-full h-12">
            <p className="w-1/4 text-center font-semibold text-lg">판매금액</p>
            <p className="w-1/4 text-center font-semibold text-lg">확정금액</p>
            <p className="w-1/4 text-center font-semibold text-lg">출금대기</p>
            <p className="w-1/4 text-center font-semibold text-lg">출금완료</p>
            <p className="w-1/4 text-center font-semibold text-lg">보유잔액</p>
          </div>
          <div className="flex items-center justify-between w-full h-12">
            <p className="w-1/4 text-center font-medium text-lg">
              {mockData.money.sales.toLocaleString()}원
            </p>
            <p className="w-1/4 text-center font-medium text-lg">
              {mockData.money.fixed.toLocaleString()}원
            </p>
            <p className="w-1/4 text-center font-medium text-lg">
              {mockData.money.withdrawalReady.toLocaleString()}원
            </p>
            <p className="w-1/4 text-center font-medium text-lg">
              {mockData.money.withdrawal.toLocaleString()}원
            </p>
            <p className="w-1/4 text-center font-medium text-lg">
              {mockData.money.balance.toLocaleString()}원
            </p>
          </div>
        </CardBox>
      </div>
    </div>
  );
}
