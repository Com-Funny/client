class ApiUrlConfig {
  public main = "/";
  public product = "/product";

  hasParam(urlKey: string, params: { [key: string]: string | number }): string {
    if (!(urlKey in this)) {
      throw new Error(
        `The URL key "${urlKey}" does not exist in ApiUrlConfig.`
      );
    }

    const baseUrl = (this as any)[urlKey];

    const queryString = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    return `${baseUrl}?${queryString}`;
  }
}

export default new ApiUrlConfig();
