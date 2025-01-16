import { configure } from "mobx";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";
import IndicatorViewModel from "src/viewModels/indicator/indicator.viewModel";
import UserViewModel from "src/viewModels/user/user.viewModel";

const isServer = typeof window === "undefined";

let store: any = null;
configure({ enforceActions: "observed" });

export class RootStore {
  public defaultViewModel: DefaultViewModel;
  public indicatorViewModel: IndicatorViewModel;
  public userViewModel: UserViewModel;

  constructor(initialData: IDefaultProps) {
    this.indicatorViewModel = new IndicatorViewModel();
    const initData = Object.assign(initialData, {
      indicatorViewModel: this.indicatorViewModel,
    });

    this.defaultViewModel = new DefaultViewModel(initData);
    this.userViewModel = new UserViewModel(initData);
  }
}

export default function initializeStore(initData: IDefaultProps) {
  if (isServer) {
    return new RootStore(initData);
  }
  if (store === null) {
    store = new RootStore(initData);
  }

  return store;
}
