import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import json from "@eslint/json";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
      json,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    files: ["**/*.json"],
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },
]);
