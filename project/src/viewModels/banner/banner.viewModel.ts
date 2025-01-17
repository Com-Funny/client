import { action, makeObservable, observable } from "mobx";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";

export default class BannerViewModel extends DefaultViewModel {
  public list: any = [];

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      list: observable,

      getBanner: action,
    });
  }

  public async getBanner() {
    // todo mockdata
  }
}
