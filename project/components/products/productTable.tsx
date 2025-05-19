"use client";

import CardBox from "components/box/cardBox";
import CommonTable, { TableHead } from "components/table/commonTable";
import Pagination from "components/table/pagination";
import { useState } from "react";
import { useProducts } from "src/lib/queries/products";
import { useCallback } from "react";

const productHeadKeys: TableHead[] = [
  { key: "id", name: "", align: "center", width: 4 },
  { key: "name", name: "상품명", align: "left", width: 30 },
  { key: "price", name: "가격", align: "center", width: 10 },
  { key: "discountRate", name: "할인율", align: "center", width: 6 },
  { key: "discountPrice", name: "할인가격", align: "center", width: 10 },
  { key: "purchases", name: "판매", align: "center", width: 8 },
  { key: "contact", name: "문의", align: "center", width: 8 },
  { key: "review", name: "리뷰", align: "center", width: 8 },
  { key: "return", name: "반품", align: "center", width: 8 },
  { key: "exchange", name: "환불", align: "center", width: 8 },
];

export default function ProductTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const { data, isLoading, isError, error } = useProducts({
    page,
    limit,
    query,
    sort,
    order,
  });

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const handleLimitChange = useCallback((limit: number) => {
    setLimit(limit);
  }, []);

  const handleQueryChange = useCallback((query: string) => {
    setQuery(query);
  }, []);

  const onClickSort = useCallback(
    (key: string) => {
      if (sort === "" && key === "id") {
        setSort(key);
        setOrder(order === "asc" ? "desc" : "asc");
        return;
      }

      if (sort === key) {
        setOrder(order === "asc" ? "desc" : "asc");
      } else {
        setSort(key);
        setOrder("asc");
      }
    },
    [sort, order]
  );

  return (
    <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
      <h1 className="text-lg font-semibold">상품 목록</h1>
      <CardBox className="w-full p-5 flex flex-col items-start justify-start gap-4 shadow-lg rounded-xl">
        <div className="w-full overflow-x-auto">
          <CommonTable
            type="products"
            heads={productHeadKeys}
            list={data && data.list}
            sort={sort}
            order={order}
            onClickSort={onClickSort}
          />
          {isLoading && (
            <div>
              <p className="text-center text-gray-500 py-4">불러오는 중...</p>
            </div>
          )}
          {data && data.list.length < 1 && (
            <div>
              <p className="text-center text-gray-500 py-4">
                {isError
                  ? "데이터를 불러오는 데 실패했습니다."
                  : "상품이 없습니다."}
              </p>
            </div>
          )}
        </div>
      </CardBox>
      {data && (
        <Pagination
          page={data.page}
          limit={data.limit}
          total={data.total}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}
