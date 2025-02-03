import { Type } from "class-transformer";
import { PartsDto } from "src/dto/product/parts.dto";

export default class ProductModel {
  public id: number = 0;

  @Type(() => PartsDto)
  public options: PartsDto[] = [];

  public ship: number = 0;

  public count: number = 1;

  public price: number = 0;
}
