/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [],
  test: {
    coverage: {
      provider: "c8",
      branches: 60,
      functions: 75,
      lines: 75,
      statements: 75,
    },
    clearMocks: true,
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
  },
});
