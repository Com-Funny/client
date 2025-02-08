import { Type } from "class-transformer";
import BannerContentDto from "./bannerContent.dto";

export default class BannerDto {
  public readonly id: number = 0;
  public readonly title: string = "";
  public readonly description: string = "";
  public readonly notice: string = "";
  public readonly gradient: string = "";
  @Type(() => BannerContentDto)
  public readonly contents: BannerContentDto[] = [];
}
