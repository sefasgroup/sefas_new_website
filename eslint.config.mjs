import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "public/vendor/**"],
  },
  {
    files: [
      "app/_components/home/Awards.tsx",
      "app/_components/home/BusinessLines.tsx",
      "app/_components/home/Hero.tsx",
      "app/_shell/PageTransition.tsx",
      "app/_shell/Splash.tsx",
    ],
    rules: { "@next/next/no-img-element": "off" },
  },
];

export default eslintConfig;
