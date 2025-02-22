import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";
import mock from "src/mock/priceFilteredProduct.json";
import { plainToInstance } from "class-transformer";
import { ProductDto } from "src/dto/product/product.dto";

export default class PriceRangeProduct extends DefaultViewModel {
  priceRanges = [
    { label: "40만원~60만원", minPrice: 400000, maxPrice: 600000 },
    { label: "60만원~80만원", minPrice: 600000, maxPrice: 800000 },
    { label: "80만원~100만원", minPrice: 800000, maxPrice: 1000000 },
    { label: "100만원~120만원", minPrice: 1000000, maxPrice: 1200000 },
    { label: "120만원~140만원", minPrice: 1200000, maxPrice: 1400000 },
    { label: "140만원~160만원", minPrice: 1400000, maxPrice: 1600000 },
    { label: "160만원~200만원", minPrice: 1600000, maxPrice: 2000000 },
    { label: "200만원~240만원", minPrice: 2000000, maxPrice: 2400000 },
    { label: "240만원~300만원", minPrice: 2400000, maxPrice: 3000000 },
    { label: "300만원 이상", minPrice: 3000000 },
  ];

  selectedRangeIndex: number | null = null;

  public products: ProductDto[] = [];

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      priceRanges: observable,
      selectedRangeIndex: observable,
      products: observable,
      setSelectedRangeIndex: action,
      getProducts: action,
    });
  }

  setSelectedRangeIndex(index: number) {
    this.selectedRangeIndex = index;
    this.getProducts();
  }

  async getProducts() {
    const { minPrice, maxPrice } = this.priceRanges[this.selectedRangeIndex];
    // const queryString = maxPrice
    //   ? `?minPrice=${minPrice}&maxPrice=${maxPrice}`
    //   : `?minPrice=${minPrice}`;

    // try {
    //   const response = await axios(`/api/products${queryString}`);
    //   const data = await response.data;
    //   if (data.status === "success") {
    //     runInAction(() => {
    //       this.products = data.data.products;
    //     });
    //   } else {
    //     runInAction(() => {
    //       this.products = [];
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   runInAction(() => {
    //     this.products = [];
    //   });
    // }
    try {
      const mockData = plainToInstance(ProductDto, mock);

      runInAction(() => {
        this.products = mockData;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.products = [];
      });
    }
  }
}
