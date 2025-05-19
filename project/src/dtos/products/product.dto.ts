export default class ProductDto {
  public readonly id: number = 0;
  public readonly name: string = "";
  public readonly price: number = 0;
  public readonly discountPrice: number = 0;
  public readonly discountRate: number = 0;
  public readonly image: string = "";
  public readonly like: number = 0;
  public readonly purchases: number = 0;
  [key: string]: string | number;
}
