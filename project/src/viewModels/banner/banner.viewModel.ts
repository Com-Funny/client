import { action, makeObservable, observable, runInAction } from "mobx";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";
import { plainToInstance } from "class-transformer";
import mockData from "src/mock/banner.json";
import BannerDto from "src/dto/banner/banner.dto";

export default class BannerViewModel extends DefaultViewModel {
  public list: BannerDto[] = [];

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      list: observable,
      getBanner: action,
    });
  }

  public async getBanner() {
    try {
      const bannerInstance = plainToInstance(BannerDto, mockData);

      runInAction(() => {
        this.list = bannerInstance;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
