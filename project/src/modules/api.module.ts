import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
  RawAxiosRequestHeaders,
} from "axios";
import { plainToInstance } from "class-transformer";
import IndicatorViewModel from "src/viewModels/indicator/indicator.viewModel";

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: any;
  request?: any;
}

export interface ServerResponse<T> {
  data: T;
}

export class ApiModule {
  private static instance: ApiModule;
  private axios: AxiosInstance = axios.create({});
  private indicatorViewModel: IndicatorViewModel;
  private token: string | null = "";
  private commonHeader: RawAxiosRequestHeaders;
  private baseUrl: string = "";
  private constructor(indicatorViewModel?: IndicatorViewModel) {
    this.indicatorViewModel = indicatorViewModel;
    this.commonHeader = {
      "Content-Type": "application/json",
    };
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  }

  private setToken(): void {
    this.token = window.localStorage.getItem("token");
    if (this.token) {
      this.commonHeader["Authorization"] = `Bearer ${this.token}`;
    }
  }

  private setAxiosInstance() {
    this.setToken();
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: this.commonHeader,
      responseType: "json",
    });

    if (typeof this.indicatorViewModel !== "undefined") {
      this.indicatorViewModel.useIndicator(true);
    }
  }

  public static getInstance(
    indicatorViewModel?: IndicatorViewModel
  ): ApiModule {
    return this.instance || (this.instance = new this(indicatorViewModel));
  }

  async get<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .get(url, {
        params: { ...params },
      })
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  async post<T>(url: string, params?: T, config?: AxiosRequestConfig) {
    this.setAxiosInstance();
    return await this.axios
      .post(url, { ...params }, config)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  async put<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .put(url, { params: { ...params } })
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  async patch<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .patch(url, params)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  async delete(url: string) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .delete(url)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
    this.indicatorViewModel.useIndicator(false);

    return response;
  };

  private handleError = (error: any): AxiosError => {
    this.indicatorViewModel.useIndicator(false);
    const errorDto = plainToInstance(AxiosError, error);

    throw errorDto;
  };
}
