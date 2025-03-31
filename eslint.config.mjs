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
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variable errors
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type usage
      "@next/next/no-img-element": "off", // Allow <img> instead of <Image />
      "react-hooks/rules-of-hooks": "off", // Disable React Hooks rule (if causing issues)
      "react-hooks/exhaustive-deps": "warn", // Just show a warning instead of an error
    },
  },
];

export default eslintConfig;
