import { PartsType } from "config/constants";

export class PartsDto {
  public readonly id: number = 0;
  public readonly name: string = "";
  public readonly spec: string = "";
  public readonly manufacturer: string = "";
  public readonly price: number = 0;
  public readonly imageUrl: string = "";
  public readonly partsType: number = PartsType.UNSET;
  public readonly isOption: boolean = false;
  public count: number = 1;
}
