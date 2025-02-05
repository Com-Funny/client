import { instanceToPlain, plainToInstance } from "class-transformer";
import ApiUrlConfig from "config/apiUrl.config";
import { action, makeObservable, observable, runInAction } from "mobx";
import { ProductDto } from "src/dto/product/product.dto";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";
import mock from "src/mock/product.json";
import ProductModel from "src/models/product/product.model";
import { updateModelProps } from "config/type";

export default class ProductViewModel extends DefaultViewModel {
  public detail: ProductDto = new ProductDto();
  public list: ProductDto[] = [];
  public model: ProductModel = new ProductModel();

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      detail: observable,
      list: observable,
      model: observable,

      getDetail: action,
      updateModel: action,
    });
  }

  public updateModel = ({ target, value }: updateModelProps) => {
    const plainData = instanceToPlain(this.model);

    runInAction(() => {
      this.model = plainToInstance(ProductModel, {
        ...plainData,
        [target]: value,
      });
    });
  };

  public getDetail = async (id: number) => {
    // TODO : Remove this mock data
    const mockData = plainToInstance(ProductDto, mock);

    runInAction(() => {
      this.detail = mockData;
      this.model = plainToInstance(ProductModel, {
        id: mockData.id,
        options: [
          {
            id: 0,
            name: "기본상품",
            price: mockData.discountedPrice,
            image: "",
            partsType: 0,
            isOption: false,
            count: 1,
          },
        ],
        ship: 0,
        count: 1,
        price: mockData.discountedPrice,
      });
    });

    return;

    await this.api
      .get(ApiUrlConfig.hasParam("product", { id }))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
