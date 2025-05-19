import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import ProductDto from "src/dtos/products/product.dto";
import mockData from "src/mockdata/products.json";

// 응답 DTO
class ProductsResponseDto {
  page: number = 0;
  limit: number = 0;
  total: number = 0;
  list: ProductDto[] = [];
}

// 요청 파라미터 타입
interface FetchProductsParams {
  page?: number;
  limit?: number;
  query?: string;
  sort?: string;
  order?: "asc" | "desc";
}

// const mockProducts: ProductDto[] = mockData;
const mockProducts: ProductDto[] = mockData;

export const fetchNewProducts = async (): Promise<ProductDto[]> => {
  return [];
  // return mockProducts.slice(0, 10);
};

export const fetchProducts = async (
  params: FetchProductsParams = {}
): Promise<ProductsResponseDto> => {
  const page = params.page || 1;
  const limit = params.limit || 10;
  const query = params.query || "";
  const sort = params.sort || "id";
  const order = params.order || "asc";

  // 검색 필터링
  let filteredProducts = mockProducts;
  if (query) {
    filteredProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // 정렬
  filteredProducts = [...filteredProducts].sort((a, b) => {
    const aValue = a[sort as keyof ProductDto];
    const bValue = b[sort as keyof ProductDto];
    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }
    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  // 페이지네이션
  const total = filteredProducts.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // 클래스 인스턴스를 직렬화 가능한 객체로 변환
  const response = plainToInstance(ProductsResponseDto, {
    page,
    limit,
    total,
    list: paginatedProducts,
  });
  return JSON.parse(JSON.stringify(response));
};

export const useProducts = (params: FetchProductsParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
};

export const useNewProducts = () => {
  return useQuery({
    queryKey: ["newProducts"],
    queryFn: () => fetchNewProducts(),
  });
};
