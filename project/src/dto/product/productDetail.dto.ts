import { Type } from "class-transformer";
import { PartsDto } from "./parts.dto";
import { ShippingDto } from "./shipping.dto";

export class ProductDetailDto {
  public readonly id: number = 0;

  public readonly name: string = "";

  public readonly basePrice: number = 0;

  public readonly discountedPrice: number = 0;

  public readonly discountRate: number = 0;

  public readonly manufacturer: string = "";

  @Type(() => ShippingDto)
  public readonly shippingMethods: ShippingDto[] = [];

  @Type(() => PartsDto)
  public readonly parts: PartsDto[] = [];

  public readonly productImageUrls: string[] = [];

  public readonly productDetailImageUrls: string[] = [];
}
