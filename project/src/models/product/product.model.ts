import { Type } from "class-transformer";
import { PartsDto } from "src/dto/product/parts.dto";

export default class ProductModel {
  public id: number = 0;

  @Type(() => PartsDto)
  public options: PartsDto[] = [
    {
      id: 0,
      name: "기본상품",
      price: 0,
      imageUrl: "",
      partsType: 0,
      isOption: false,
      count: 1,
      spec: "",
      manufacturer: "",
    },
  ];

  public ship: number = 0;

  public count: number = 1;

  public price: number = 0;
}
