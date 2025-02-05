import { action, makeObservable, observable, runInAction } from "mobx";
import { plainToInstance } from "class-transformer";
import CategoryDto from "src/dto/category/category.dto";
import categoryData from "src/mock/categoryProducts.json";
import DefaultViewModel, { IDefaultProps } from "../default.viewModel";

export default class CategoryViewModel extends DefaultViewModel {
  public categories: CategoryDto[] = [];

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      categories: observable,

      initCategories: action,
    });
    this.initCategories();
  }

  public initCategories() {
    runInAction(() => {
      this.categories = categoryData.categories.map((category) =>
        plainToInstance(CategoryDto, category)
      );
    });
  }

  public getProductById(productId: number) {
    for (const category of this.categories) {
      const product = category.products.find((p) => p.id === productId);
      if (product) {
        return product;
      }
    }

    return undefined;
  }
}
