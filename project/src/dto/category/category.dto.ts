import { Type } from "class-transformer";

export class CategoryProductDto {
  public readonly id: number = 0;
  public readonly name: string = "";
  public readonly price: number = 0;
  public readonly discountPrice: number = 0;
  public readonly discountRate: number = 0;
  public readonly manufacturer: string = "";
  public readonly image: string = "";
  products: any;
}

export class CategoryDto {
  public readonly id: number = 0;
  public readonly category: string = "";
  public readonly description: string = "";
  public readonly highlight: string = "";
  public readonly categoryInKorean: string = "";
  @Type(() => String)
  public readonly images: string[] = [];

  @Type(() => CategoryProductDto)
  public readonly products: CategoryProductDto[] = [];
}
