import { plainToInstance } from "class-transformer";
import ApiUrlConfig from "config/apiUrl.config";
import { PartsType } from "config/constants";
import { action, makeObservable, observable, runInAction } from "mobx";
import { ProductDto } from "src/dto/product/product.dto";
import DefaultViewModel, {
  IDefaultProps,
} from "src/viewModels/default.viewModel";
import productExample from "public/images/example/product.png";

export default class ProductViewModel extends DefaultViewModel {
  public detail: ProductDto = new ProductDto();
  public list: ProductDto[] = [];

  constructor(props: IDefaultProps) {
    super(props);
    makeObservable(this, {
      detail: observable,
      list: observable,

      getDetail: action,
    });
  }

  public async getDetail(id: number) {
    // TODO : Remove this mock data

    const mockData = plainToInstance(ProductDto, {
      id: 34912,
      name: "신학기 게이밍 PC (7800X3D/RTX4080)",
      price: 3122000,
      discountPrice: 2870000,
      discountRate: 8,
      manufacturer: "TRAVEL PC",
      shippingInfo: [
        { name: "퀵", cost: 0, isFree: false },
        { name: "택배", cost: 4500, isFree: false },
      ],
      partsList: [
        {
          id: 43822,
          name: "AMD 라이젠7-5세대 7800X3D (라파엘) (멀티팩(정품))",
          price: 628990,
          partsType: PartsType.CPU,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/934/627/img/19627934_1.jpg?shrink=160:160",
        },
        {
          id: 43222,
          name: "MSI MAG B650M 박격포 WIFI",
          price: 259000,
          partsType: PartsType.MAINBOARD,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/187/971/img/17971187_1.jpg?shrink=160:160",
        },
        {
          id: 34568,
          name: "GIGABYTE 지포스 RTX 4080 SUPER WINDFORCE V2 D6X 16GB 제이씨현",
          price: 1709990,
          partsType: PartsType.VGA,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/195/998/img/33998195_1.jpg?shrink=160:160",
        },
        {
          id: 47831,
          name: "G.SKILL DDR5-5200 CL40 RIPJAWS M5 RGB 블랙 패키지 (32GB(16Gx2))",
          price: 144000,
          partsType: PartsType.RAM,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/461/151/img/56151461_1.jpg?shrink=160:160",
        },
        {
          id: 50012,
          name: "SK하이닉스 Platinum P41 M.2 NVMe 병행수입(2TB)",
          price: 221130,
          partsType: PartsType.STORAGE,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/445/653/img/62653445_1.jpg?shrink=160:160",
        },
        {
          id: 22432,
          name: "darkFlash DS900 ARGB 강화유리 (블랙)",
          price: 54860,
          partsType: PartsType.CASE,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/099/861/img/32861099_1.jpg?shrink=160:160",
        },
        {
          id: 13584,
          name: "GIGABYTE P750GM 80PLUS골드 풀모듈러",
          price: 102600,
          partsType: PartsType.POWER,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/532/676/img/12676532_1.jpg?shrink=160:160",
        },
        {
          id: 23334,
          name: "darkFlash NEBULA DN-360D ARGB (블랙)",
          price: 90990,
          partsType: PartsType.CPU_COOLER,
          isOption: false,
          image:
            "https://img.danawa.com/prod_img/500000/647/377/img/64377647_1.jpg?shrink=160:160",
        },
      ],
      images: [
        "https://img.danawa.com/prod_img/500000/099/861/img/32861099_1.jpg?shrink=330:*&_v=20241206140623",
        "https://img.danawa.com/prod_img/500000/099/861/img/32861099_2.jpg?shrink=330:*&_v=20241206140623",
        "https://img.danawa.com/prod_img/500000/099/861/img/32861099_3.jpg?shrink=330:*&_v=20241206140623",
        "https://img.danawa.com/prod_img/500000/099/861/img/32861099_4.jpg?shrink=330:*&_v=20241206140623",
        productExample.src,
      ],
    });

    runInAction(() => {
      this.detail = mockData;
    });

    return;

    await this.api
      .get(ApiUrlConfig.hasParam("product", { id }))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
