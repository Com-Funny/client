export const MenuType = {
  1: { name: "가격별추천PC", url: "/price" },
  2: { name: "용도별추천PC", url: "/purpose" },
  3: { name: "무료배송상품", url: "/free-delivery" },
  4: { name: "이벤트상품", url: "/event" },
} as const;
export type MenuType = (typeof MenuType)[keyof typeof MenuType];
