import { action, makeObservable, observable, runInAction } from "mobx";

export default class IndicatorViewModel {
  public indicator: number = 0;
  constructor() {
    makeObservable(this, {
      indicator: observable,
      useIndicator: action,
    });
  }

  public useIndicator = (state: boolean) => {
    runInAction(() => {
      if (state === true) {
        this.indicator = this.indicator + 1;
      } else {
        this.indicator = this.indicator - 1;
      }
    });
  };
}
