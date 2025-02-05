import Header from "components/layout/header";
import ApiLoadingIndicator from "components/loading/apiLoadingIndicator";
import { Provider } from "mobx-react";
import App from "next/app";
import { NextRouter, withRouter } from "next/router";
import "reflect-metadata";
import initializeStore, { RootStore } from "src/mobx/store";
import { IDefaultProps } from "src/viewModels/default.viewModel";
import "styles/globals.style.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

class MyApp extends App<any, any, any> {
  public mobxStore: RootStore;
  public router: NextRouter;

  constructor(props: IDefaultProps) {
    super(props);
    this.router = props.router;

    this.mobxStore = initializeStore({
      router: props.router,
      indicatorViewModel: props.indicatorViewModel,
    });
  }

  render() {
    const { Component } = this.props;

    return (
      <main className={pretendard.className}>
        <Provider {...this.mobxStore}>
          <Header />
          <ApiLoadingIndicator />
          <Component router={this.router} />
          {/* <Footer /> */}
        </Provider>
      </main>
    );
  }
}

export default withRouter(MyApp);
