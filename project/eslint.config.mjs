import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 사용되지 않은 변수 경고 비활성화
      "@typescript-eslint/no-unused-vars": "off",
      // const 권장 오류 비활성화
      "prefer-const": "off",
      // any 타입 사용 경고 비활성화
      "@typescript-eslint/no-explicit-any": "off",
      // useEffect 종속성 경고 비활성화
      "react-hooks/exhaustive-deps": "off",
      // 잘못된 문자 이스케이프 오류 비활성화
      "react/no-unescaped-entities": "off",
      // <img> 태그 사용 경고 비활성화
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
