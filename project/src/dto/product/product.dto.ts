import { Type } from "class-transformer";
import { PartsDto } from "./parts.dto";
import { ShippingDto } from "./shipping.dto";

export class ProductDto {
  public readonly id: number = 0;

  public readonly name: string = "";

  public readonly price: number = 0;

  public readonly discountPrice: number = 0;

  public readonly discountRate: number = 0;

  public readonly manufacturer: string = "";

  @Type(() => ShippingDto)
  public readonly shippingInfo: ShippingDto[] = [];

  @Type(() => PartsDto)
  public readonly partsList: PartsDto[] = [];

  public readonly images: string[] = [];
}
