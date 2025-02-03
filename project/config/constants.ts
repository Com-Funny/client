export const MenuType = {
  1: { name: "가격별추천PC", url: "/price" },
  2: { name: "용도별추천PC", url: "/purpose" },
  3: { name: "무료배송상품", url: "/free-delivery" },
  4: { name: "이벤트상품", url: "/event" },
} as const;
export type MenuType = (typeof MenuType)[keyof typeof MenuType];

export const StatusType = {
  PENDING: 0,
  SUCCESS: 1,
  FAILURE: 2,
} as const;
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const PartsType = {
  UNSET: 0,
  CPU: 1,
  MAINBOARD: 2,
  VGA: 3,
  RAM: 4,
  STORAGE: 5,
  CASE: 6,
  POWER: 7,
  CPU_COOLER: 8,
  OTHER: 9,
  getPartsName: (value: number) => {
    switch (value) {
      case 0:
        return "기본";
      case 1:
        return "CPU";
      case 2:
        return "메인보드";
      case 3:
        return "GPU";
      case 4:
        return "RAM";
      case 5:
        return "저장장치";
      case 6:
        return "CASE";
      case 7:
        return "POWER";
      case 8:
        return "CPU 쿨러";
      case 9:
        return "기타";
      default:
        return "기타";
    }
  },
} as const;
export type PartsType = (typeof PartsType)[keyof typeof PartsType];
