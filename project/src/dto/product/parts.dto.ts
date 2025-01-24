import { PartsType } from "config/constants";

export class PartsDto {
  public readonly id: number = 0;
  public readonly name: string = "";
  public readonly price: number = 0;
  public readonly image: string = "";
  public readonly partsType: PartsType = PartsType.UNSET;
  public readonly isOption: boolean = false;
}
