import { Type } from "class-transformer";
import { ProductDto } from "../product/product.dto";

export default class CategoryDto {
  public readonly id: number = 0;

  public readonly category: string = "";

  public readonly description: string = "";

  public readonly highlight: string = "";

  public readonly categoryInKorean: string = "";

  @Type(() => String)
  public readonly images: string[] = [];

  @Type(() => ProductDto)
  public readonly products: ProductDto[] = [];
}
