import { makeObservable } from "mobx";
import { NextRouter } from "next/router";
import { ApiModule } from "src/modules/api.module";
import IndicatorViewModel from "src/viewModels/indicator/indicator.viewModel";

export interface IDefaultProps {
  router: NextRouter;
  indicatorViewModel: IndicatorViewModel;
}

export default class DefaultViewModel {
  protected api: ApiModule;
  protected indicatorViewModel: IndicatorViewModel;
  public router: NextRouter;

  constructor(props: IDefaultProps) {
    this.api = ApiModule.getInstance(props.indicatorViewModel);
    this.router = props.router;

    makeObservable(this, {});
  }
}
